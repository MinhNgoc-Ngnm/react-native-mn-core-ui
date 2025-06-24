#import "MnCoreUi.h"

@implementation MnCoreUi

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

static BOOL RCTIsIPhoneX()
{
  static BOOL isIPhoneX = NO;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    CGSize screenSize = [UIScreen mainScreen].nativeBounds.size;
    CGSize iPhoneXScreenSize = CGSizeMake(1125, 2436);
    CGSize iPhoneXMaxScreenSize = CGSizeMake(1242, 2688);
    CGSize iPhoneXRScreenSize = CGSizeMake(828, 1792);

    isIPhoneX = CGSizeEqualToSize(screenSize, iPhoneXScreenSize) ||
                CGSizeEqualToSize(screenSize, iPhoneXMaxScreenSize) ||
                CGSizeEqualToSize(screenSize, iPhoneXRScreenSize);
  });

  return isIPhoneX;
}

- (NSDictionary *)getOffset
{
  CGFloat top = 0;
  CGFloat bottom = 0;

  @try {
    NSArray<UIWindow *> *windows = [UIApplication sharedApplication].windows;

    if (RCTIsIPhoneX()) {
      top = 44;
      bottom = 34;
    }

    if (@available(iOS 11.0, *)) {
      top = windows.firstObject.safeAreaInsets.top;
      bottom = windows.firstObject.safeAreaInsets.bottom;
    } else {
      UIViewController *vc = windows.firstObject.rootViewController;
      top = vc.topLayoutGuide.length;
      bottom = vc.bottomLayoutGuide.length;
    }

    return @{
      @"top": @(top),
      @"bottom": @(bottom),
      @"is_iphone_x": @(RCTIsIPhoneX() || bottom > 0)
    };
  } @catch (NSException *e) {
    return @{
      @"top": @(0),
      @"bottom": @(0),
      @"is_iphone_x": @(NO)
    };
  }
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
(const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeMnCoreUiSpecJSI>(params);
}
#endif

@end
