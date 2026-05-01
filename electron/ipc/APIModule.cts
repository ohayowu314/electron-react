import { ipcMain } from "electron";
import { IpcMainListener } from "../types.cjs";

function registerIpcHandlers(handlers: Record<string, IpcMainListener>) {
  Object.entries(handlers).forEach(([key, handler]) => {
    ipcMain.handle(key, async (...args) => {
      try {
        return await handler(...args);
      } catch (err) {
        console.error(`[IPC Error] ${key}:`, err);
        throw err;
      }
    });
  });
}

const MessageHanders: Record<string, IpcMainListener> = {
  "console-message": (_event, { message }: { message: string }) => {
    console.log(message);
  },
};

// API 模組
export const APIModule = {
  init: () => {
    registerIpcHandlers(MessageHanders);
  },
};
