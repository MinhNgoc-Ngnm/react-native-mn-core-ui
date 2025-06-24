#ifdef RCT_NEW_ARCH_ENABLED

#import <MnCoreUiSpec/MnCoreUiSpec.h>

@interface MnCoreUi : NSObject <NativeMnCoreUiSpec>

#else

#import <React/RCTBridgeModule.h>

@interface MnCoreUi : NSObject <RCTBridgeModule>

#endif

@end
