import { describe, expect, it } from 'vitest';
import { TripPlayback } from '../../astro/scripts/trip-playback';

describe('trip demonstration playback', () => {
  it('advances only while visible, playing and in the foreground', () => {
    const demo = new TripPlayback(5);
    demo.next(); expect(demo.index).toBe(0);
    expect(demo.playing).toBe(false);
    demo.visible = true; demo.next(); expect(demo.index).toBe(0);
    demo.toggle(); demo.next(); expect(demo.index).toBe(1);
    demo.hidden = true; demo.next(); expect(demo.index).toBe(1);
    demo.hidden = false; demo.next(); expect(demo.index).toBe(2);
  });
  it('keeps a manual selection paused across visibility changes', () => {
    const demo = new TripPlayback(5);
    demo.visible = true; demo.select(3);
    demo.visible = false; demo.visible = true; demo.next();
    expect(demo.index).toBe(3); expect(demo.playing).toBe(false);
    demo.toggle(); demo.next(); expect(demo.index).toBe(4);
    demo.next(); expect(demo.index).toBe(0);
  });
  it('starts paused for reduced motion and does not resume when preference changes back', () => {
    const demo = new TripPlayback(5, true);
    demo.visible = true; demo.next(); expect(demo.index).toBe(0);
    demo.toggle(); demo.next(); expect(demo.index).toBe(1);
    demo.setReducedMotion(true); demo.setReducedMotion(false);
    expect(demo.running).toBe(false);
  });
});
