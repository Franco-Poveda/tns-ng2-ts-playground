package com.tns.gen.com.google.android.gms.maps;

public class GoogleMap_OnInfoWindowClickListener implements com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener {
	public GoogleMap_OnInfoWindowClickListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onInfoWindowClick(com.google.android.gms.maps.model.Marker param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onInfoWindowClick", void.class, args);
	}

}
