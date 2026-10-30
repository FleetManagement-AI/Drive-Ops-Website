/** Playback policy is independent of DOM timing, visibility and rendering. */
export class TripPlayback {
  index = 0;
  playing: boolean;
  visible = false;
  hidden = false;
  constructor(readonly count: number, reducedMotion = false) { this.playing = false; void reducedMotion; }
  get running() { return this.playing && this.visible && !this.hidden; }
  next() { if (this.running) this.index = (this.index + 1) % this.count; }
  select(index: number) { if (index < 0 || index >= this.count) return; this.index = index; this.playing = false; }
  toggle() { this.playing = !this.playing; }
  setReducedMotion(reduced: boolean) { if (reduced) this.playing = false; }
}
