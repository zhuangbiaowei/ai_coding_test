package registry

type SessionRegistry struct {
	counts map[string]int
}

func NewSessionRegistry() *SessionRegistry {
	return &SessionRegistry{counts: make(map[string]int)}
}

func (r *SessionRegistry) Increment(region string) {
	if _, ok := r.counts[region]; !ok {
		r.counts[region] = 0
	}

	r.counts[region]++
}

func (r *SessionRegistry) Snapshot() map[string]int {
	return r.counts
}
