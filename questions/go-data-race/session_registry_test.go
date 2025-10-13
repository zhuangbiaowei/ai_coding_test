package registry

import (
	"sync"
	"testing"
)

func TestRegistryPanicsWhenConcurrent(t *testing.T) {
	reg := NewSessionRegistry()
	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func(region string) {
			defer wg.Done()
			for j := 0; j < 100; j++ {
				reg.Increment(region)
			}
		}(string('a' + rune(i%5)))
	}

	wg.Wait()

	snapshot := reg.Snapshot()
	if len(snapshot) == 0 {
		t.Fatalf("expected snapshot to contain counts")
	}
}
