import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.driveos.launcher',
  appName: 'DriveOS',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;