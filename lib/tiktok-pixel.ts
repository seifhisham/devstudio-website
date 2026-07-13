type TikTokEvent = "Contact";

type TikTokQueue = {
  track: (event: TikTokEvent) => void;
};

export function trackTikTokEvent(event: TikTokEvent) {
  const ttq = (window as Window & { ttq?: TikTokQueue }).ttq;
  ttq?.track(event);
}
