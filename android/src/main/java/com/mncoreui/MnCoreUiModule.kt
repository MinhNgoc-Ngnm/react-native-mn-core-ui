package com.mncoreui

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.WritableNativeMap


@ReactModule(name = MnCoreUiModule.NAME)
class MnCoreUiModule(reactContext: ReactApplicationContext) :
  NativeMnCoreUiSpec(reactContext) {
  
  override fun getOffset(): WritableMap {
    val map = WritableNativeMap()
    map.putInt("top", 0)
    map.putInt("bottom", 0)
    map.putBoolean("is_iphone_x", false)
    return map
  }

  override fun getName(): String {
    return NAME
  }

  companion object {
    const val NAME = "MnCoreUi"
  }
}
