console.log("Preload script loaded");
import { contextBridge, ipcRenderer } from "electron";
// 僅能 import type !!

contextBridge.exposeInMainWorld("api", {
  consoleMessage: (message: string): Promise<void> =>
    ipcRenderer.invoke("console-message", { message }),
});
console.log("Preload script end");
