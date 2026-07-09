export type ReceiverOptions = {
  host?: string;
  port?: number;
};

export type CaptureOptions = {
  receiver?: ReceiverOptions;
};

export interface NativePeriscopeSpec {
  capture(options?: CaptureOptions): Promise<void>;
  stop(): Promise<void>;
  sendTestRequest(url?: string): Promise<number>;
}
