import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getOffset(): {
    top: number;
    bottom: number;
    is_iphone_x: boolean;
  };
}

export default TurboModuleRegistry.getEnforcing<Spec>('MnCoreUi');
