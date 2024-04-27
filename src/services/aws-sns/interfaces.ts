export interface IAWSSNSService {
  publish(message: string): Promise<void>;
}