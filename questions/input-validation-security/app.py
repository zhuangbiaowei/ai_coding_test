from flask import Flask, jsonify, render_template_string, request
import sqlite3

app = Flask(__name__)

TEMPLATE = """
<!doctype html>
<html>
  <body>
    <h1>Guest Feedback</h1>
    <ul>
    {% for entry in entries %}
      <li><strong>{{ entry['name'] }}</strong>: {{ entry['message']|safe }}</li>
    {% endfor %}
    </ul>
  </body>
</html>
"""


def get_db():
    conn = sqlite3.connect(":memory:")
    with open("schema.sql") as schema:
        conn.executescript(schema.read())
    return conn


@app.route("/feedback", methods=["POST"])
def feedback():
    data = request.get_json() or {}
    name = data.get("name", "")
    message = data.get("message", "")

    conn = get_db()
    conn.execute(
        f"INSERT INTO feedback(name, message) VALUES ('{name}', '{message}')"
    )
    conn.commit()

    entries = conn.execute("SELECT name, message FROM feedback ORDER BY id DESC").fetchall()
    return render_template_string(TEMPLATE, entries=[{"name": row[0], "message": row[1]} for row in entries])


@app.route("/health")
def health():
    return jsonify(status="ok")


if __name__ == "__main__":
    app.run(debug=True)
