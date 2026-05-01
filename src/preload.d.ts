interface MessageAPI {
  consoleMessage: (message: string) => Promise<void>;
}
declare global {
  interface Window {
    api: MessageAPI;
  }
}
export {};
