declare module 'lenis/react' {
  export const ReactLenis: any;
  export const useLenis: any;
  export interface LenisOptions {
    wrapper?: HTMLElement;
    content?: HTMLElement;
    wheelEventsTarget?: HTMLElement;
    eventsTarget?: HTMLElement;
    smoothWheel?: boolean;
    syncTouch?: boolean;
    syncTouchLerp?: number;
    touchInertiaMultiplier?: number;
    duration?: number;
    easing?: (t: number) => number;
    lerp?: number;
    infinite?: boolean;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    touchMultiplier?: number;
    wheelMultiplier?: number;
    normalizeWheel?: boolean;
    autoResize?: boolean;
  }
}