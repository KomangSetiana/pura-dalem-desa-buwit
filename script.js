(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_0432466F_106A_EB0C_4195_E02AACE1C934]); this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_0CBB2824_1CBE_F838_419A_E68D33B5D1C1",
  "this.HTMLText_11862569_1EB4_1FC3_41B2_2F29A31E2F42",
  "this.Container_0C010B1F_1CD6_9809_418E_62E1D3E4DBDA",
  "this.Container_040E887E_0B9F_5A87_4195_8B0D3FE67E31",
  "this.Container_1BC2354C_0B9E_CA8B_4190_FCEDFE004ADA",
  "this.Container_0430918C_0B9E_CD84_41A7_21BEA33DB9F5",
  "this.Container_041E1BBA_0B91_3D8C_417D_81C906B56586",
  "this.Container_1B4FB034_0B92_CA84_4186_DC92638A9C09",
  "this.Container_18E4FC8B_0FDB_B89E_41A3_448E2AB47E64",
  "this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A",
  "this.Container_0F5DE972_1EEC_17C1_41B1_02921B0E8979",
  "this.Container_0E34D802_1EEC_1541_41AD_01447A669164",
  "this.Container_0EA00C61_1EEC_EDC3_41BC_16CB7FA1D299",
  "this.Container_0FD0F448_1EEC_3DC1_41A3_5F66023D9F61",
  "this.Container_0F96FBFE_1EEC_6AC1_41B2_60C48338CE6B",
  "this.Container_0E564439_1ED4_1D43_41BC_BC2700946726",
  "this.Container_073BA71B_1F54_1B47_41AD_98F23ED5E554",
  "this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC",
  "this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360",
  "this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872",
  "this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30",
  "this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47",
  "this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Player",
 "verticalAlign": "top",
 "definitions": [{
 "duration": 500,
 "id": "effect_04F49D2D_1FDC_2F43_41B8_7336735597E4",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_0787695F_1F6C_17FF_41B8_281BA9BD2FDC",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 10.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10DCED18_1F6C_D376_418A_A461348C11E8",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_08A66D80_10A4_7889_4185_70F383766220",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_0668E014_1FB4_1541_41B8_90F2D5C8B7DC",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_camera",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_04F1828C_1FD4_1541_41A6_701F6C6BA119",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 84.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10A95D2C_1F6C_D3AE_41B0_33DCF0DDBABA",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_1D6AE8F7_0FDC_F876_41A4_D2840FCC0076",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -176.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10EA8CE3_1F6C_D2DA_41BD_70B44BC6217D",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_0CD51685_10E4_A88B_419A_0B9591F13F2F",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 5.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0F60DD76_1F6C_D3BA_41B6_55F30002ACD2",
 "automaticRotationSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Depan Prajapati",
 "hfovMin": "135%",
 "id": "panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13",
 "overlays": [
  "this.overlay_EEF38B99_FB42_1E31_41CE_0D8F28B1B605",
  "this.overlay_EE72C4F1_FB42_0BF1_41DB_783A4A79A52C",
  "this.overlay_E3519737_FB4E_1670_41CD_BCF3DC5F2F2B"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 176.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 175.43,
   "panorama": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F",
   "distance": 1
  },
  {
   "yaw": -4.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -174.1,
   "panorama": "this.panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_camera",
 "automaticRotationSpeed": 0
},
{
 "initialPosition": {
  "yaw": 4.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10C9CD0B_1F6C_D36A_41AC_8EF8512B09AB",
 "automaticRotationSpeed": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_camera",
 "automaticRotationSpeed": 0
},
{
 "initialPosition": {
  "yaw": -2.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10E4CCC8_1F6C_D2D6_41A8_CFE522568A78",
 "automaticRotationSpeed": 0
},
{
 "initialPosition": {
  "yaw": -177.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10882D5C_1F6C_D3EE_41B9_3F57A24A8E21",
 "automaticRotationSpeed": 0
},
{
 "initialPosition": {
  "yaw": -89.75,
  "class": "PanoramaCameraPosition",
  "pitch": 3.3
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_camera",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_036B1FB3_1FDC_6B47_41B2_FF4D6EEBB4BE",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_camera",
 "automaticRotationSpeed": 0
},
{
 "initialPosition": {
  "yaw": -178.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_100B6C9B_1F6C_D16A_4198_61D03A06C604",
 "automaticRotationSpeed": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_camera",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_064473A9_1FAC_3B43_41AD_46A1B1BB0357",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Depan Kori Agung",
 "hfovMin": "135%",
 "id": "panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03",
 "overlays": [
  "this.overlay_ED9ED34D_FB7E_0E11_41D3_80F3E5620BD8",
  "this.overlay_ED3F87F3_FB42_15F1_41E5_117BC0BD59EB",
  "this.overlay_E3CB14B4_FB42_0A70_41E1_708CD8DF24BA",
  "this.overlay_E197CD67_FB4E_3A10_41BA_76466D4A02BD",
  "this.overlay_E0CFC608_FF5E_3610_41D7_88CA51EA6B9C",
  "this.overlay_E35D7074_FF5E_0AF7_41E2_C070A2743AFD",
  "this.overlay_E34834D1_FF5E_0A30_41D6_9EF95639ECEE",
  "this.overlay_E33E2C80_FF42_1A10_41DF_274A9A3DFE58"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 91.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.57,
   "panorama": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F",
   "distance": 1
  },
  {
   "yaw": 91.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 3.3,
   "panorama": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72",
   "distance": 1
  },
  {
   "yaw": 2.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 81.01,
   "panorama": "this.panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 500,
 "id": "effect_08077EB2_1F6C_6D41_4188_55AB690D8302",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_0432466F_106A_EB0C_4195_E02AACE1C934",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0432466F_106A_EB0C_4195_E02AACE1C934.ogg",
  "mp3Url": "media/audio_0432466F_106A_EB0C_4195_E02AACE1C934.mp3"
 },
 "data": {
  "label": "Pura Dalem Mengwitani"
 }
},
{
 "duration": 500,
 "id": "effect_08E0394C_1F6C_37C1_4191_2DB9134F2871",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_03E63652_1FD4_1DC1_4195_5F584E8A871B",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -4.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_109C6D69_1F6C_D3D6_41BC_00554380551E",
 "automaticRotationSpeed": 0
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_08B15800_10A4_A78A_4192_C8F3A6F5FE00",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_10392C81_1F6C_D156_41B1_B920CCAEA9C7",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "effect_0CD1421A_10E5_ABBE_41B0_0E86E84F25B0",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_0CF0D034_10ED_A78A_41A1_FB4C20470BA4",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Depan Pura",
 "hfovMin": "135%",
 "id": "panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4",
 "overlays": [
  "this.overlay_E3568F18_FB4E_1630_41E8_3E81A16D9EAE",
  "this.overlay_E0BC32B4_FAC6_0E77_41D1_EAF77AAB488E",
  "this.overlay_E6CB0CC4_FAC7_FA10_41E9_0F6B414258D4",
  "this.overlay_E0BB9BB1_FAC6_3E70_41D5_E55EBF84A81C"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -95.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.02,
   "panorama": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72",
   "distance": 1
  },
  {
   "yaw": 177.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.07,
   "panorama": "this.panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5",
   "distance": 1
  },
  {
   "yaw": 3.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.98,
   "panorama": "this.panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -176.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10C6BCFE_1F6C_D2AA_41B7_79515A29A68F",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_1EFB9D48_0FA4_799A_41A0_478BF7AF602D",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -10.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10A66D23_1F6C_D35A_4194_DA9F7DAD61AE",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_0D69D058_10ED_A7B9_41A2_EF3EFE6387C0",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -98.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10FD0CF0_1F6C_D2B6_41B6_2E0FCC364AFC",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_0BF644A6_1F6C_1D41_417E_F95D51FCE0FC",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_camera",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_050C7058_1FAC_15C1_41BD_E6BD393ABE18",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Luar Selatan (Dekat Setra)",
 "hfovMin": "135%",
 "id": "panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5",
 "overlays": [
  "this.overlay_E341A673_FB4E_36F1_41EE_09F46062F2A4",
  "this.overlay_E04A47C4_FAC6_F610_41D8_E351D75B9B1C",
  "this.overlay_E32A0534_FF5E_0A77_41EF_89ED377B07D1"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -169.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 177.02,
   "panorama": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 500,
 "id": "effect_1C763E10_0FA5_BB8A_419C_52F3A5001DBE",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_049FAA96_1FD4_1541_41A3_3F738E47771F",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "items": [
  {
   "media": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_camera"
  },
  {
   "media": "this.panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_camera"
  },
  {
   "media": "this.panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_camera"
  },
  {
   "media": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_camera"
  },
  {
   "media": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_camera"
  },
  {
   "media": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_camera"
  },
  {
   "media": "this.panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_camera"
  },
  {
   "media": "this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_camera"
  },
  {
   "media": "this.panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Jeroan",
 "hfovMin": "135%",
 "id": "panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4",
 "overlays": [
  "this.overlay_E366BD2F_FB42_1A10_41E0_B8BC05160BAF",
  "this.overlay_E35DD9CB_FB4E_3A11_41E6_7E1612B57C09",
  "this.overlay_E0E30A9F_FF42_1E30_41EA_57872D018E8C",
  "this.overlay_E322FBB6_FF42_7E70_41C4_95580712C93F",
  "this.overlay_E32B1E08_FF42_761F_41D7_394BA36F4D99",
  "this.overlay_E269DD25_FF43_FA11_41DD_9E274839C298",
  "this.overlay_E0D5EEBA_FF42_F673_41D2_74C868653BCE",
  "this.overlay_E37004EE_FF42_0A10_41EE_BCCDB98374CE",
  "this.overlay_E3607FAF_FF42_3611_41EA_BB4D8DB155F9",
  "this.overlay_0BEBE674_1F6C_1DC1_41A4_30BE63CE653B",
  "this.overlay_0A38185B_1F6C_15C7_41AA_A520015636AD",
  "this.overlay_0AED093E_1F6C_3741_4167_A7A4EE220CA6",
  "this.overlay_087C1868_1F6C_75C1_41AA_034662446A4E"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 81.01,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.41,
   "panorama": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Pelinggih Prajapati",
 "hfovMin": "135%",
 "id": "panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F",
 "overlays": [
  "this.overlay_EE6CC12C_FB5E_0A17_41D6_3A0EACE9EAEE",
  "this.overlay_E36C8D4B_FB4E_7A10_41B5_72B9B9AFA59E",
  "this.overlay_E095066A_FF42_1610_41EF_3B285B7FEAF9"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -174.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -4.21,
   "panorama": "this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_camera",
 "automaticRotationSpeed": 0
},
{
 "initialPosition": {
  "yaw": -88.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10EC0CD2_1F6C_D2FA_4190_2E7285517F40",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_1E5131D8_0FA4_A8BA_4192_5AAEBAE64ECA",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_06153393_1FD4_1B47_418E_BDF3AF9DCAB3",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_camera",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_09817E45_10A5_DB8B_41AF_161AB4267434",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_0DE5AB87_10EC_B897_4195_FCDD7D86A526",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "duration": 500,
 "id": "effect_086D42C3_105C_688E_41A9_959DA6444383",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_0999F336_1F6C_3B41_41BA_BD33A0A71370",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_08B15800_10A4_A78A_4192_C8F3A6F5FE00_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 2128,
 "initialZoomFactor": 1,
 "id": "map_08B15800_10A4_A78A_4192_C8F3A6F5FE00",
 "class": "Map",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_08B15800_10A4_A78A_4192_C8F3A6F5FE00.png",
    "width": 2128,
    "class": "ImageResourceLevel",
    "height": 1408
   },
   {
    "url": "media/map_08B15800_10A4_A78A_4192_C8F3A6F5FE00_lq.png",
    "width": 314,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 208
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "label": "denah pura dalem kaler kelakahan kaja",
 "scaleMode": "fit_inside",
 "height": 1408
},
{
 "initialPosition": {
  "yaw": -88.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10864D4E_1F6C_D3EB_41B9_0F538601F58E",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_0DB3E8EB_10EC_F89E_41AA_CC625D8F6787",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 175.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0F765D7C_1F6C_D3AE_41BD_E2F2594D5A52",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_1F5EF5B3_0FA4_A88E_41AC_7AFC37EE134C",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_0E7653D7_10E4_E8B7_41AE_D1C8ED21895C",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_05026997_1FAC_374F_41BB_E1A57F933849",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Candi Bentar",
 "hfovMin": "135%",
 "id": "panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72",
 "overlays": [
  "this.overlay_E8FCBC61_FAC3_FA10_41E6_3D0A4582A9D1",
  "this.overlay_EC6F68DE_FB42_7A33_41EF_24EC870C19FB",
  "this.overlay_E28C3B17_FB4E_1E31_41E3_9468956022E1",
  "this.overlay_E1C7B0E5_FAC2_0A10_41D3_2D928EC4B030",
  "this.overlay_0B333DD5_1F6C_6EC3_41A2_780AFDC99C4E",
  "this.overlay_0B969DD8_1F6C_2EC1_41B5_D15133805801"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -175.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -95.82,
   "panorama": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4",
   "distance": 1
  },
  {
   "yaw": 1.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -94.1,
   "panorama": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F",
   "distance": 1
  },
  {
   "yaw": 3.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.87,
   "panorama": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 500,
 "id": "effect_098C78B7_1F54_154F_41B5_B50816D05106",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 85.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10B2FD42_1F6C_D3DA_418F_DA3ABABF4050",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_04F5F9D1_1FD4_76C3_41AB_10539A0D8E94",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "buttonMoveDown": [
  "this.IconButton_06EFCFD0_10AC_D889_4194_BE8B14E203CC",
  "this.IconButton_075D9281_10AD_E88A_419F_AF835283991F",
  "this.IconButton_0659408B_10AC_A89E_41A8_D8B48F10A8CB",
  "this.IconButton_09A6FC55_10AB_DF8B_41AD_74BA465D411E",
  "this.IconButton_07915013_10A5_E78E_4186_E3A6412B56C7",
  "this.IconButton_06891529_10A4_699A_41A1_18067A241606",
  "this.IconButton_084580F5_10A4_A88B_4184_68CDFF96B55F",
  "this.IconButton_08A6B4CE_10DC_6896_41AD_E9DBF006EEEE",
  "this.IconButton_079873CF_10A4_6896_41A1_415DC49EF97E"
 ],
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "duration": 500,
 "id": "effect_0830CC9D_1F6F_ED43_4142_66DEA45D68F5",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -3.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_101F6CBA_1F6C_D2AA_4133_F9DE56FF1D58",
 "automaticRotationSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Luar Utara",
 "hfovMin": "135%",
 "id": "panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919",
 "overlays": [
  "this.overlay_E3558FB2_FB4E_3670_41D9_86F4C88C4267",
  "this.overlay_E18CF2C9_FAC6_0E10_4190_C3C36CE6FE9F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 169.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 3.59,
   "panorama": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_08B15800_10A4_A78A_4192_C8F3A6F5FE00",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_1039BC81_1F6C_D156_41A2_825A12BBCACB",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "effect_04FE4F27_1FDC_2B4F_41B4_1F4DCBE5A28F",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Jaba Sisi 1",
 "hfovMin": "135%",
 "id": "panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F",
 "overlays": [
  "this.overlay_E27EF24A_FB46_0E10_41ED_BD7A3E3E7FA3",
  "this.overlay_E32E227E_FB46_0EF0_41EA_08C6809A2EEB",
  "this.overlay_E233FBF3_FB4F_FDF1_41E7_D9CA6B05C976",
  "this.overlay_E26C479B_FB42_7630_41EA_430892EAB472",
  "this.overlay_E12506CD_FAC2_1610_41CF_7388CA9ACE03"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -94.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.84,
   "panorama": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72",
   "distance": 1
  },
  {
   "yaw": 91.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.72,
   "panorama": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03",
   "distance": 1
  },
  {
   "yaw": 175.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 176.75,
   "panorama": "this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13",
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 500,
 "id": "effect_0C573B3C_10E4_59FA_40F1_C6862CD8A380",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_055ADE94_1FAC_2D40_418E_E4CB3F24276A",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -88.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_10108CAB_1F6C_D2AA_4196_C1A8F77CE39B",
 "automaticRotationSpeed": 0
},
{
 "duration": 500,
 "id": "effect_0B381D1F_10EB_D9B6_41AF_4177046F8BEA",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "duration": 500,
 "id": "effect_0B3D084C_10EC_A79A_4149_B5FF8B20615C",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0CBB2824_1CBE_F838_419A_E68D33B5D1C1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "width": "20.833%",
 "children": [
  "this.IconButton_1BF8799A_0FE4_F8BE_41AE_F19CD7BDEF45",
  "this.IconButton_1BFA399A_0FE4_F8BE_4194_AA1BF32EC93C",
  "this.IconButton_1BFA099A_0FE4_F8BE_41A3_9A7801F31EC1"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "13.93%",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container4398"
 },
 "paddingTop": 0,
 "layout": "horizontal"
},
{
 "maxHeight": 512,
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_11862569_1EB4_1FC3_41B2_2F29A31E2F42",
 "left": "0.09%",
 "paddingLeft": 20,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "width": "52.717%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "top": "0%",
 "minWidth": 1,
 "borderColor": "#000000",
 "height": "20.73%",
 "paddingTop": 20,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:26px;font-family:'Bali Simbar-B';\">purd2m/kel(k)lkhn/kjed]\u00c1dt/buwit/.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:20px;font-family:'Product Sans';\"><B>Pura Dalem Kaler Kelakahan Kaja, Desa Adat Buwit</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText1580"
 },
 "maxWidth": 1270
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C010B1F_1CD6_9809_418E_62E1D3E4DBDA",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0C01FB1F_1CD6_9809_41A7_D76338CB3340",
  "this.Container_0C013B1F_1CD6_9809_41AF_E2D415FBF677"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0C010B1F_1CD6_9809_418E_62E1D3E4DBDA, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Bale Kulkul"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_040E887E_0B9F_5A87_4195_8B0D3FE67E31",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_040D887E_0B9F_5A87_4172_F6A493343FDD",
  "this.Container_040ED87E_0B9F_5A87_419B_2EA36BC4FB2F"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_040E887E_0B9F_5A87_4195_8B0D3FE67E31, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Pelinggih Ratu Ayu Mas"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1BC2354C_0B9E_CA8B_4190_FCEDFE004ADA",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_1B02154C_0B9E_CA8B_4189_9C22098F7F2C",
  "this.Container_1BC3D54C_0B9E_CA8B_4197_FCFC7BB7FF88"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_1BC2354C_0B9E_CA8B_4190_FCEDFE004ADA, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Pelinggih Ratu Made"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0430918C_0B9E_CD84_41A7_21BEA33DB9F5",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0431918C_0B9E_CD84_4189_70DEC3D52194",
  "this.Container_0430A18C_0B9E_CD84_4170_2E85BDAD331D"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0430918C_0B9E_CD84_41A7_21BEA33DB9F5, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Pagedongan Ratu Pelinggihan Sakti"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_041E1BBA_0B91_3D8C_417D_81C906B56586",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_041F1BBA_0B91_3D8C_41A2_DD213248E2B3",
  "this.Container_041FCBBA_0B91_3D8C_41A3_6C283DBE0FBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_041E1BBA_0B91_3D8C_417D_81C906B56586, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Pelinggih Ratu Nyoman Sakti"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B4FB034_0B92_CA84_4186_DC92638A9C09",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_1B488034_0B92_CA84_4176_21B0F299D384",
  "this.Container_1B4F5034_0B92_CA84_4195_028EA09E3FCA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_1B4FB034_0B92_CA84_4186_DC92638A9C09, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Pelinggih Prajapati"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_18E4FC8B_0FDB_B89E_41A3_448E2AB47E64",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_191B8C8B_0FDB_B89E_4190_9AB2A9BD14D0",
  "this.Container_18E48C8B_0FDB_B89E_41AD_B18269030CE1"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_18E4FC8B_0FDB_B89E_41A3_448E2AB47E64, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Kori Agung"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_054CB6D4_10AD_A88A_4180_E524EE63996A",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_054C66D4_10AD_A88A_4190_8C0F13AC0A46"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F5DE972_1EEC_17C1_41B1_02921B0E8979",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0F5CE972_1EEC_17C1_419C_BB3F2D7BED6B",
  "this.Container_0F5DB972_1EEC_17C1_4186_95B68B48F76C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 200,
 "click": "this.setComponentVisibility(this.Container_0F5DE972_1EEC_17C1_41B1_02921B0E8979, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 200,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Bale Pasanekan"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E34D802_1EEC_1541_41AD_01447A669164",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0FF4F7F2_1EEC_1AC1_41B1_3799C115C80F",
  "this.Container_0E342802_1EEC_1541_419F_8C1EDCAE3AFA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0E34D802_1EEC_1541_41AD_01447A669164, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Bale Gong"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0EA00C61_1EEC_EDC3_41BC_16CB7FA1D299",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0EA7FC61_1EEC_EDC3_41B5_785E401B9ADB",
  "this.Container_0EA03C61_1EEC_EDC3_41B6_1904EBCB5393"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0EA00C61_1EEC_EDC3_41BC_16CB7FA1D299, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Pewaregan"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0FD0F448_1EEC_3DC1_41A3_5F66023D9F61",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0F90E448_1EEC_3DC1_4198_9B0853A5F4E5",
  "this.Container_0FD0A448_1EEC_3DC1_41B6_37C756BC6B99"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0FD0F448_1EEC_3DC1_41A3_5F66023D9F61, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Sakapat"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F96FBFE_1EEC_6AC1_41B2_60C48338CE6B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0F95FBFE_1EEC_6AC1_41B4_CC0D4B22789F",
  "this.Container_0F968BFE_1EEC_6AC1_419A_42B33666E095"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0F96FBFE_1EEC_6AC1_41B2_60C48338CE6B, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Setra"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E564439_1ED4_1D43_41BC_BC2700946726",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0E575439_1ED4_1D43_41B9_69365BD52549",
  "this.Container_0E569439_1ED4_1D43_41B6_71A4AA3ACBE5"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0E564439_1ED4_1D43_41BC_BC2700946726, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Bale Pemujan"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_073BA71B_1F54_1B47_41AD_98F23ED5E554",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_073A371B_1F54_1B47_4181_A4F322A415E3",
  "this.Container_073BE71B_1F54_1B47_41BB_B656FFF33D2B"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_073BA71B_1F54_1B47_41AD_98F23ED5E554, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "LIST 3D"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0BA659B1_1F7C_1743_41A5_6CEAAB61CBCC",
  "this.Container_0BA679B1_1F7C_1743_41B4_87223E27FADD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D B KIRI"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0BBAED60_1F7F_EFC1_4172_51E05C9A8F44",
  "this.Container_0BBACD60_1F7F_EFC1_4171_1292A9C4ADEC"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D B KANAN"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_096B72AF_1F7C_155F_4194_D952AED2310E",
  "this.Container_096B92AF_1F7C_155F_41B2_C6F52698CE89"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D BD KIRI"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0BFB4AC0_1F7B_EAC1_41A6_CACCD791FE86",
  "this.Container_0BFB2AC0_1F7B_EAC1_4121_7BB2E6AD5B00"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D BD KANAN"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0BD076F6_1F74_3AC1_41B8_26661AFBD742",
  "this.Container_0BD096F6_1F74_3AC1_41B9_17EF41F02935"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D BDX KIRI"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_0BF79C98_1F74_6D41_4185_BA5431802D15",
  "this.Container_0BF7FC98_1F74_6D41_41B6_A53D8553BE39"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": true,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D BDX KANAN"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.75,
   "yaw": -4.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F, this.camera_0F60DD76_1F6C_D3BA_41B6_55F30002ACD2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EDDBADF8_FB5E_35F0_41D0_29F5028ADDF0",
   "pitch": -21.68,
   "hfov": 15.75,
   "yaw": -4.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EEF38B99_FB42_1E31_41CE_0D8F28B1B605",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.51,
   "yaw": 176.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F, this.camera_109C6D69_1F6C_D3D6_41BC_00554380551E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E705E4BB_FB42_0A70_41D6_83CA26DF9017",
   "pitch": -13.68,
   "hfov": 13.51,
   "yaw": 176.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE72C4F1_FB42_0BF1_41DB_783A4A79A52C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 6.95,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 45.41,
 "bleaching": 0.7,
 "id": "overlay_E3519737_FB4E_1670_41CD_BCF3DC5F2F2B"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.88,
   "yaw": 91.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F, this.camera_10EC0CD2_1F6C_D2FA_4190_2E7285517F40); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E6299A69_FAC2_1E11_41EA_F89BCA926187",
   "pitch": -14.4,
   "hfov": 11.88,
   "yaw": 91.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ED9ED34D_FB7E_0E11_41D3_80F3E5620BD8",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.08,
   "yaw": 2.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4, this.camera_10FD0CF0_1F6C_D2B6_41B6_2E0FCC364AFC); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1382648_FB42_3610_41CF_6A7024CB68E3",
   "pitch": -17.1,
   "hfov": 13.08,
   "yaw": 2.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ED3F87F3_FB42_15F1_41E5_117BC0BD59EB",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.96,
   "yaw": 91.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_5_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72, this.camera_10EA8CE3_1F6C_D2DA_41BD_70B44BC6217D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E101741C_FB4E_0A30_41E9_97E039338E99",
   "pitch": -5.24,
   "hfov": 4.96,
   "yaw": 91.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3CB14B4_FB42_0A70_41E1_708CD8DF24BA",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "bleachingDistance": 0.36,
 "yaw": 9.41,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 47.45,
 "bleaching": 0.34,
 "id": "overlay_E197CD67_FB4E_3A10_41BA_76466D4A02BD"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -147.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0EA00C61_1EEC_EDC3_41BC_16CB7FA1D299, true, 0, this.effect_0830CC9D_1F6F_ED43_4142_66DEA45D68F5, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF303BA1_FF4E_1E11_41EE_84DB44949658",
   "pitch": -0.85,
   "hfov": 6.89,
   "yaw": -147.13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E0CFC608_FF5E_3610_41D7_88CA51EA6B9C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -88.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0F5DE972_1EEC_17C1_41B1_02921B0E8979, true, 0, this.effect_08077EB2_1F6C_6D41_4188_55AB690D8302, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF304BA1_FF4E_1E11_41EA_3D33A354F5F4",
   "pitch": -2.06,
   "hfov": 6.89,
   "yaw": -88.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E35D7074_FF5E_0AF7_41E2_C070A2743AFD",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.88,
   "yaw": 1.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_18E4FC8B_0FDB_B89E_41A3_448E2AB47E64, true, 0, this.effect_09817E45_10A5_DB8B_41AF_161AB4267434, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF308BA1_FF4E_1E11_41E4_96596611F331",
   "pitch": 3.16,
   "hfov": 6.88,
   "yaw": 1.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E34834D1_FF5E_0A30_41D6_9EF95639ECEE",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 157.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0E34D802_1EEC_1541_41AD_01447A669164, true, 0, this.effect_0999F336_1F6C_3B41_41BA_BD33A0A71370, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF30CBA1_FF4E_1E11_41D1_E1DFCB5BE3B1",
   "pitch": -0.24,
   "hfov": 6.89,
   "yaw": 157.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E33E2C80_FF42_1A10_41DF_274A9A3DFE58",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 9.82,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 41.32,
 "bleaching": 0.7,
 "id": "overlay_E3568F18_FB4E_1630_41E8_3E81A16D9EAE"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.02,
   "yaw": 3.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919, this.camera_10A66D23_1F6C_D35A_4194_DA9F7DAD61AE); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1F87349_FAC6_0E11_41C5_25EDB7FB7663",
   "pitch": -13.53,
   "hfov": 11.02,
   "yaw": 3.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E0BC32B4_FAC6_0E77_41D1_EAF77AAB488E",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.23,
   "yaw": 177.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5, this.camera_10DCED18_1F6C_D376_418A_A461348C11E8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1487B03_FAC2_1E11_41EE_4A0098A14815",
   "pitch": -15.31,
   "hfov": 11.23,
   "yaw": 177.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E6CB0CC4_FAC7_FA10_41E9_0F6B414258D4",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.39,
   "yaw": -95.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_7_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72, this.camera_10C9CD0B_1F6C_D36A_41AC_8EF8512B09AB); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1F88349_FAC6_0E11_41EF_03B374BDC704",
   "pitch": -13.04,
   "hfov": 12.39,
   "yaw": -95.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E0BB9BB1_FAC6_3E70_41D5_E55EBF84A81C",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -162,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 38.86,
 "bleaching": 0.7,
 "id": "overlay_E341A673_FB4E_36F1_41EE_09F46062F2A4"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.85,
   "yaw": -169.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4, this.camera_10E4CCC8_1F6C_D2D6_41A8_CFE522568A78); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF352BA1_FF4E_1E11_41C6_734AC9B62089",
   "pitch": -10.37,
   "hfov": 9.85,
   "yaw": -169.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E04A47C4_FAC6_F610_41D8_E351D75B9B1C",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 68.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0F96FBFE_1EEC_6AC1_41B2_60C48338CE6B, true, 0, this.effect_098C78B7_1F54_154F_41B5_B50816D05106, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF357BA1_FF4E_1E11_41E5_480D5D888468",
   "pitch": -0.75,
   "hfov": 6.89,
   "yaw": 68.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E32A0534_FF5E_0A77_41EF_89ED377B07D1",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.13,
   "yaw": 81.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03, this.camera_10882D5C_1F6C_D3EE_41B9_3F57A24A8E21); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E011F337_FB42_0E70_41E4_4AAF89C31ACB",
   "pitch": -15.86,
   "hfov": 11.13,
   "yaw": 81.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E366BD2F_FB42_1A10_41E0_B8BC05160BAF",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -81.82,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 48.27,
 "bleaching": 0.7,
 "id": "overlay_E35DD9CB_FB4E_3A11_41E6_7E1612B57C09"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.88,
   "yaw": 0.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0430918C_0B9E_CD84_41A7_21BEA33DB9F5, true, 0, this.effect_1C763E10_0FA5_BB8A_419C_52F3A5001DBE, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF31ABA1_FF4E_1E11_41C3_D2518E3D56D7",
   "pitch": 3.43,
   "hfov": 6.88,
   "yaw": 0.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E0E30A9F_FF42_1E30_41EA_57872D018E8C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.86,
   "yaw": -40.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1BC2354C_0B9E_CA8B_4190_FCEDFE004ADA, true, 0, this.effect_1EFB9D48_0FA4_799A_41A0_478BF7AF602D, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF31EBA1_FF4E_1E11_41E6_79873187A674",
   "pitch": -6,
   "hfov": 6.86,
   "yaw": -40.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E322FBB6_FF42_7E70_41C4_95580712C93F",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 40.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_040E887E_0B9F_5A87_4195_8B0D3FE67E31, true, 0, this.effect_1F5EF5B3_0FA4_A88E_41AC_7AFC37EE134C, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF3E3BA1_FF4E_1E11_41E1_02DDAA8E9093",
   "pitch": -6.93,
   "hfov": 6.84,
   "yaw": 40.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E32B1E08_FF42_761F_41D7_394BA36F4D99",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": -68.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_041E1BBA_0B91_3D8C_417D_81C906B56586, true, 0, this.effect_1E5131D8_0FA4_A8BA_4192_5AAEBAE64ECA, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF3E5BA1_FF4E_1E11_41DD_81AB74EA9161",
   "pitch": -9.19,
   "hfov": 6.8,
   "yaw": -68.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E269DD25_FF43_FA11_41DD_9E274839C298",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -166.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0E564439_1ED4_1D43_41BC_BC2700946726, true, 0, this.effect_08E0394C_1F6C_37C1_4191_2DB9134F2871, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF3EBBB0_FF4E_1E70_41E9_CA0AD1973A7F",
   "pitch": -2.41,
   "hfov": 6.89,
   "yaw": -166.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E0D5EEBA_FF42_F673_41D2_74C868653BCE",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.87,
   "yaw": 148.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0FD0F448_1EEC_3DC1_41A3_5F66023D9F61, true, 0, this.effect_0787695F_1F6C_17FF_41B8_281BA9BD2FDC, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF3EDBB0_FF4E_1E70_41E0_268F8BE126B2",
   "pitch": -4.67,
   "hfov": 6.87,
   "yaw": 148.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E37004EE_FF42_0A10_41EE_BCCDB98374CE",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 81.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_18E4FC8B_0FDB_B89E_41A3_448E2AB47E64, true, 0, this.effect_086D42C3_105C_688E_41A9_959DA6444383, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF3F0BB0_FF4E_1E70_41ED_3831F84BB7CF",
   "pitch": 0.91,
   "hfov": 6.89,
   "yaw": 81.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3607FAF_FF42_3611_41EA_BB4D8DB155F9",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": 21.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30, true, 0, this.effect_064473A9_1FAC_3B43_41AD_46A1B1BB0357, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_9_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 6.05,
   "yaw": 21.15,
   "distance": 50
  }
 ],
 "id": "overlay_0BEBE674_1F6C_1DC1_41A4_30BE63CE653B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": -22.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872, true, 0, this.effect_05026997_1FAC_374F_41BB_E1A57F933849, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_10_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 5.67,
   "yaw": -22.06,
   "distance": 50
  }
 ],
 "id": "overlay_0A38185B_1F6C_15C7_41AA_A520015636AD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.49,
   "yaw": -40.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435, true, 0, this.effect_050C7058_1FAC_15C1_41BD_E6BD393ABE18, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_11_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -11.77,
   "yaw": -40.06,
   "distance": 50
  }
 ],
 "id": "overlay_0AED093E_1F6C_3741_4167_A7A4EE220CA6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.55,
   "yaw": -48.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47, true, 0, this.effect_055ADE94_1FAC_2D40_418E_E4CB3F24276A, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_12_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -9.25,
   "yaw": -48.97,
   "distance": 50
  }
 ],
 "id": "overlay_087C1868_1F6C_75C1_41AA_034662446A4E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.71,
   "yaw": -174.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13, this.camera_0F765D7C_1F6C_D3AE_41BD_E2F2594D5A52); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EE796367_FB7E_0E10_4188_DB76611B6BC4",
   "pitch": -24.48,
   "hfov": 23.71,
   "yaw": -174.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE6CC12C_FB5E_0A17_41D6_3A0EACE9EAEE",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 18,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 45.41,
 "bleaching": 0.7,
 "id": "overlay_E36C8D4B_FB4E_7A10_41B5_72B9B9AFA59E"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 40.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_1B4FB034_0B92_CA84_4186_DC92638A9C09, true, 0, this.effect_1D6AE8F7_0FDC_F876_41A4_D2840FCC0076, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DF3C4BB0_FF4E_1E70_41E2_F83D672F43B7",
   "pitch": -6.93,
   "hfov": 6.84,
   "yaw": 40.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E095066A_FF42_1610_41EF_3B285B7FEAF9",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.21,
   "yaw": -175.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4, this.camera_10A95D2C_1F6C_D3AE_41B0_33DCF0DDBABA); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E3D0437D_FB46_0EF0_41E9_9C3BF7D60235",
   "pitch": -26.98,
   "hfov": 20.21,
   "yaw": -175.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E8FCBC61_FAC3_FA10_41E6_3D0A4582A9D1",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 3.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_4_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03, this.camera_10864D4E_1F6C_D3EB_41B9_0F538601F58E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1FFF34A_FAC6_0E13_41B9_480D97C451E8",
   "pitch": -9.19,
   "hfov": 6.89,
   "yaw": 3.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EC6F68DE_FB42_7A33_41EF_24EC870C19FB",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 112.09,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 51.14,
 "bleaching": 0.7,
 "id": "overlay_E28C3B17_FB4E_1E31_41E3_9468956022E1"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.07,
   "yaw": 1.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F, this.camera_10B2FD42_1F6C_D3DA_418F_DA3ABABF4050); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E6287A68_FAC2_1E1F_41C9_855D9FB56409",
   "pitch": -21.46,
   "hfov": 12.07,
   "yaw": 1.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E1C7B0E5_FAC2_0A10_41D3_2D928EC4B030",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.08,
   "yaw": -122.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC, true, 0, this.effect_06153393_1FD4_1B47_418E_BDF3AF9DCAB3, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_6_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -23.9,
   "yaw": -122.93,
   "distance": 50
  }
 ],
 "id": "overlay_0B333DD5_1F6C_6EC3_41A2_780AFDC99C4E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.08,
   "yaw": 117.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360, true, 0, this.effect_03E63652_1FD4_1DC1_4195_5F584E8A871B, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_7_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -23.9,
   "yaw": 117.21,
   "distance": 50
  }
 ],
 "id": "overlay_0B969DD8_1F6C_2EC1_41B5_D15133805801",
 "data": {
  "label": "Image"
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_06EFCFD0_10AC_D889_4194_BE8B14E203CC",
 "left": "32.07%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "top": "30.6%",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0E7653D7_10E4_E8B7_41AE_D1C8ED21895C, 'hideEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_06EFCFD0_10AC_D889_4194_BE8B14E203CC.png",
 "data": {
  "name": "Button27669"
 },
 "paddingBottom": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_075D9281_10AD_E88A_419F_AF835283991F",
 "left": "31.93%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "39.45%",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0CD1421A_10E5_ABBE_41B0_0E86E84F25B0, 'hideEffect', false)",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_075D9281_10AD_E88A_419F_AF835283991F.png",
 "data": {
  "name": "Button27669"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_0659408B_10AC_A89E_41A8_D8B48F10A8CB",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "45.35%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "39.45%",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0CD51685_10E4_A88B_419A_0B9591F13F2F, 'hideEffect', false); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0DB3E8EB_10EC_F89E_41AA_CC625D8F6787, 'hideEffect', false)",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0659408B_10AC_A89E_41A8_D8B48F10A8CB.png",
 "data": {
  "name": "Button27669"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_09A6FC55_10AB_DF8B_41AD_74BA465D411E",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "19.47%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "top": "46.42%",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0D69D058_10ED_A7B9_41A2_EF3EFE6387C0, 'hideEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_09A6FC55_10AB_DF8B_41AD_74BA465D411E.png",
 "data": {
  "name": "Button27669"
 },
 "paddingBottom": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_07915013_10A5_E78E_4186_E3A6412B56C7",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "19.23%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "bottom": "10.22%",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0B3D084C_10EC_A79A_4149_B5FF8B20615C, 'hideEffect', false)",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_07915013_10A5_E78E_4186_E3A6412B56C7.png",
 "data": {
  "name": "Button27669"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_06891529_10A4_699A_41A1_18067A241606",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "19.35%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "top": "33.04%",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0DE5AB87_10EC_B897_4195_FCDD7D86A526, 'hideEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_06891529_10A4_699A_41A1_18067A241606.png",
 "data": {
  "name": "Button27669"
 },
 "paddingBottom": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_084580F5_10A4_A88B_4184_68CDFF96B55F",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "36.53%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "top": "42.21%",
 "minWidth": 0,
 "mode": "push",
 "height": 34,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0B381D1F_10EB_D9B6_41AF_4177046F8BEA, 'hideEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_084580F5_10A4_A88B_4184_68CDFF96B55F.png",
 "data": {
  "name": "Button27669"
 },
 "paddingBottom": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_08A6B4CE_10DC_6896_41AD_E9DBF006EEEE",
 "backgroundOpacity": 0,
 "width": 33.1,
 "paddingRight": 0,
 "right": "25.15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "top": "46.42%",
 "minWidth": 0,
 "mode": "push",
 "height": 31,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0CF0D034_10ED_A78A_41A1_FB4C20470BA4, 'hideEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_08A6B4CE_10DC_6896_41AD_E9DBF006EEEE.png",
 "data": {
  "name": "Button27669"
 },
 "paddingBottom": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_079873CF_10A4_6896_41A1_415DC49EF97E",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "36.28%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "top": "29.59%",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0C573B3C_10E4_59FA_40F1_C6862CD8A380, 'hideEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_079873CF_10A4_6896_41A1_415DC49EF97E.png",
 "data": {
  "name": "Button27669"
 },
 "paddingBottom": 0,
 "cursor": "hand"
},
{
 "bleachingDistance": 0.4,
 "yaw": -6.55,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 43.36,
 "bleaching": 0.7,
 "id": "overlay_E3558FB2_FB4E_3670_41D9_86F4C88C4267"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.13,
   "yaw": 169.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4, this.camera_10C6BCFE_1F6C_D2AA_41B7_79515A29A68F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1FF6349_FAC6_0E11_41E5_D1431ECAB3F1",
   "pitch": -27.04,
   "hfov": 17.13,
   "yaw": 169.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E18CF2C9_FAC6_0E10_4190_C3C36CE6FE9F",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.39,
   "yaw": 91.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03, this.camera_10108CAB_1F6C_D2AA_4196_C1A8F77CE39B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E0174336_FB42_0E70_41D9_D2F28C0D7B19",
   "pitch": -12.49,
   "hfov": 11.39,
   "yaw": 91.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E27EF24A_FB46_0E10_41ED_BD7A3E3E7FA3",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.88,
   "yaw": 175.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13, this.camera_101F6CBA_1F6C_D2AA_4133_F9DE56FF1D58); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E6D9C35D_FB42_0E31_41EC_A3FAFD82707F",
   "pitch": -14.29,
   "hfov": 9.88,
   "yaw": 175.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E32E227E_FB46_0EF0_41EA_08C6809A2EEB",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -160.77,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 53.59,
 "bleaching": 0.7,
 "id": "overlay_E233FBF3_FB4F_FDF1_41E7_D9CA6B05C976"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.41,
   "yaw": -24.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_0C010B1F_1CD6_9809_418E_62E1D3E4DBDA, true, 0, this.effect_0BF644A6_1F6C_1D41_417E_F95D51FCE0FC, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E7F47B09_FB42_3E10_41C9_7DEA93FCE687",
   "pitch": -3.87,
   "hfov": 7.41,
   "yaw": -24.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E26C479B_FB42_7630_41EA_430892EAB472",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.34,
   "yaw": -94.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72, this.camera_100B6C9B_1F6C_D16A_4198_61D03A06C604); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E629FA69_FAC2_1E11_41DA_8CDF32C06FB0",
   "pitch": -20.41,
   "hfov": 15.34,
   "yaw": -94.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E12506CD_FAC2_1610_41CF_7388CA9ACE03",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_1BF8799A_0FE4_F8BE_41AE_F19CD7BDEF45",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1BF8799A_0FE4_F8BE_41AE_F19CD7BDEF45_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, true, 0, this.effect_08A66D80_10A4_7889_4185_70F383766220, 'showEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_1BF8799A_0FE4_F8BE_41AE_F19CD7BDEF45.png",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_1BFA399A_0FE4_F8BE_4194_AA1BF32EC93C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1BFA399A_0FE4_F8BE_4194_AA1BF32EC93C_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_073BA71B_1F54_1B47_41AD_98F23ED5E554, true, 0, this.effect_0668E014_1FB4_1541_41B8_90F2D5C8B7DC, 'showEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_1BFA399A_0FE4_F8BE_4194_AA1BF32EC93C.png",
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_1BFA099A_0FE4_F8BE_41A3_9A7801F31EC1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1BFA099A_0FE4_F8BE_41A3_9A7801F31EC1_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "transparencyActive": false,
 "click": "this.openLink('https://goo.gl/maps/eQ5BRnFdEiUnsXzz8', '_blank')",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_1BFA099A_0FE4_F8BE_41A3_9A7801F31EC1.png",
 "data": {
  "name": "IconButton Location"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C01FB1F_1CD6_9809_41A7_D76338CB3340",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0C01EB1F_1CD6_9809_41B6_6181C41968A3",
  "this.Container_0C01CB1F_1CD6_9809_4197_70BBA1BDEB65"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C013B1F_1CD6_9809_41AF_E2D415FBF677",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_0C012B1F_1CD6_9809_41A0_0A2EC2AA7ECA",
  "this.IconButton_0C011B1F_1CD6_9809_419C_A1F1E661208C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_040D887E_0B9F_5A87_4172_F6A493343FDD",
 "left": "11.62%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "8.09%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_040D987E_0B9F_5A87_419F_4A3291998E05",
  "this.Container_040D787E_0B9F_5A87_419F_C8E0BEBDCDAB"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_040ED87E_0B9F_5A87_419B_2EA36BC4FB2F",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "12.72%",
 "children": [
  "this.Container_040EA87E_0B9F_5A87_4185_8B5264A35EA9",
  "this.IconButton_040EB87E_0B9F_5A87_4180_6BACBAB8AB2A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B02154C_0B9E_CA8B_4189_9C22098F7F2C",
 "left": "14.33%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "9.91%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_1B02254C_0B9E_CA8B_41A3_EF08DABE7E2E",
  "this.Container_1B02654C_0B9E_CA8B_4186_DFAAF3A1AE61"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1BC3D54C_0B9E_CA8B_4197_FCFC7BB7FF88",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "13.62%",
 "children": [
  "this.Container_1BC3E54C_0B9E_CA8B_418F_741FCFCCF7E5",
  "this.IconButton_1BC2054C_0B9E_CA8B_41A0_36DD243E2026"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0431918C_0B9E_CD84_4189_70DEC3D52194",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0431E18C_0B9E_CD84_4195_DA6CCD2C0A73",
  "this.Container_0431D18C_0B9E_CD84_4198_1372F68AE2D1"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0430A18C_0B9E_CD84_4170_2E85BDAD331D",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_0430B18C_0B9E_CD84_4176_F9C97353AC04",
  "this.IconButton_0430818C_0B9E_CD84_41A3_C23CD8CB64EC"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_041F1BBA_0B91_3D8C_41A2_DD213248E2B3",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_041F0BBA_0B91_3D8C_4150_BA528BAA112A",
  "this.Container_041F6BBA_0B91_3D8C_4192_1B9ECF38DC09"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_041FCBBA_0B91_3D8C_41A3_6C283DBE0FBE",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_041E3BBA_0B91_3D8C_4185_45371B92B725",
  "this.IconButton_041E2BBA_0B91_3D8C_419B_E93D944161DD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B488034_0B92_CA84_4176_21B0F299D384",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_1B48A034_0B92_CA84_4187_9FEFAF6D67DD",
  "this.Container_1B48C034_0B92_CA84_4197_302615B9D68E"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B4F5034_0B92_CA84_4195_028EA09E3FCA",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_1B4F6034_0B92_CA84_419C_605AB6C2664D",
  "this.IconButton_1B4FA034_0B92_CA84_4198_E3DAAF86C465"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_191B8C8B_0FDB_B89E_4190_9AB2A9BD14D0",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_191BAC8B_0FDB_B89E_41AC_82EAE282D578",
  "this.Container_191BDC8B_0FDB_B89E_41AC_C4489D1FB1C6"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_18E48C8B_0FDB_B89E_41AD_B18269030CE1",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_18E4AC8B_0FDB_B89E_4194_6D21551B7EDB",
  "this.IconButton_18E4CC8B_0FDB_B89E_41AA_1B7B74E23C28"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "maxHeight": 600,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_054C66D4_10AD_A88A_4190_8C0F13AC0A46",
 "left": "13.98%",
 "maxWidth": 800,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "backgroundOpacity": 1,
 "right": "11.11%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_054C86D4_10AD_A88A_41A3_4251E516367C",
  "this.Image_041D5428_1F74_1D41_4196_D26CA9EE0E20",
  "this.IconButton_06EFCFD0_10AC_D889_4194_BE8B14E203CC",
  "this.IconButton_075D9281_10AD_E88A_419F_AF835283991F",
  "this.IconButton_0659408B_10AC_A89E_41A8_D8B48F10A8CB",
  "this.IconButton_09A6FC55_10AB_DF8B_41AD_74BA465D411E",
  "this.IconButton_07915013_10A5_E78E_4186_E3A6412B56C7",
  "this.IconButton_06891529_10A4_699A_41A1_18067A241606",
  "this.IconButton_084580F5_10A4_A88B_4184_68CDFF96B55F",
  "this.IconButton_08A6B4CE_10DC_6896_41AD_E9DBF006EEEE",
  "this.IconButton_079873CF_10A4_6896_41A1_415DC49EF97E"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 400,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "5.66%",
 "bottom": "7.52%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 200,
 "borderSize": 0,
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": true,
 "shadow": true,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F5CE972_1EEC_17C1_419C_BB3F2D7BED6B",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0F5CF972_1EEC_17C1_41BC_F51457EBDD64",
  "this.Container_0F5CD972_1EEC_17C1_41B6_669F71ABDC31"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 200,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 200,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F5DB972_1EEC_17C1_4186_95B68B48F76C",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_0F5D8972_1EEC_17C1_41AB_6B83A5112E62",
  "this.IconButton_0F5D9972_1EEC_17C1_41BB_AEDE5429BFDA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0FF4F7F2_1EEC_1AC1_41B1_3799C115C80F",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0FF487F2_1EEC_1AC1_4195_20B9A61C7064",
  "this.Container_0FF4A7F2_1EEC_1AC1_41AF_833FCE7A4061"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E342802_1EEC_1541_419F_8C1EDCAE3AFA",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_0E343802_1EEC_1541_419A_DB5005C054AE",
  "this.IconButton_0E34C802_1EEC_1541_41A5_210C6C7808D1"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0EA7FC61_1EEC_EDC3_41B5_785E401B9ADB",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0EA7EC61_1EEC_EDC3_41BA_3EF9CD120A35",
  "this.Container_0EA7CC61_1EEC_EDC3_419F_804F66A58A34"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0EA03C61_1EEC_EDC3_41B6_1904EBCB5393",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_0EA02C61_1EEC_EDC3_41A3_0B37346F7964",
  "this.IconButton_0EA01C61_1EEC_EDC3_41A2_98695EDBFA4F"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F90E448_1EEC_3DC1_4198_9B0853A5F4E5",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0F901448_1EEC_3DC1_4190_DB934427B286",
  "this.Container_0F903448_1EEC_3DC1_41B1_F5A61DF5B7A6"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0FD0A448_1EEC_3DC1_41B6_37C756BC6B99",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_0FD0D448_1EEC_3DC1_41AA_E97D870D0BA9",
  "this.IconButton_0FD0C448_1EEC_3DC1_41A2_01A75E614493"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F95FBFE_1EEC_6AC1_41B4_CC0D4B22789F",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0F95CBFE_1EEC_6AC1_41AA_FC434A23A5DA",
  "this.Container_0F952BFE_1EEC_6AC1_41B8_40336AACAD30"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F968BFE_1EEC_6AC1_419A_42B33666E095",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_0F969BFE_1EEC_6AC1_41B3_453B9D7F311E",
  "this.IconButton_0F96EBFE_1EEC_6AC1_41B5_7F25EF629F24"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E575439_1ED4_1D43_41B9_69365BD52549",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0E572439_1ED4_1D43_41AC_796266182B2B",
  "this.Container_0E570439_1ED4_1D43_41BC_1D3D096D430B"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E569439_1ED4_1D43_41B6_71A4AA3ACBE5",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_0E566439_1ED4_1D43_418C_CCB086464ED5",
  "this.IconButton_0E567439_1ED4_1D43_41B1_101478B70E8E"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_073A371B_1F54_1B47_4181_A4F322A415E3",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_0946C0AF_1FAC_355F_41A3_9C7EF5AF0591",
  "this.Container_08394684_1F54_7D41_418A_72E4D7E0BE17",
  "this.Container_080A242B_1FAC_1D47_41A9_9D741B5AF8D7"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "vertical"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_073BE71B_1F54_1B47_41BB_B656FFF33D2B",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.Container_073BF71B_1F54_1B47_41BF_18A7B927CBF7",
  "this.IconButton_073BD71B_1F54_1B47_41AE_CFDE926A37ED"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BA659B1_1F7C_1743_41A5_6CEAAB61CBCC",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_0BA669B1_1F7C_1743_41BC_E23F4262DCB8"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BA679B1_1F7C_1743_41B4_87223E27FADD",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_0BA619B1_1F7C_1743_41B0_59972C6193E6"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BBAED60_1F7F_EFC1_4172_51E05C9A8F44",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_0BBAFD60_1F7F_EFC1_419A_348995F02937"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BBACD60_1F7F_EFC1_4171_1292A9C4ADEC",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_0BBAAD60_1F7F_EFC1_41A8_E7AE96AC6A17"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_096B72AF_1F7C_155F_4194_D952AED2310E",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_096B82AF_1F7C_155F_41AF_158FE7F3476B"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_096B92AF_1F7C_155F_41B2_C6F52698CE89",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_096BB2AF_1F7C_155F_41A4_EF75318506EA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BFB4AC0_1F7B_EAC1_41A6_CACCD791FE86",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_0BFB3AC0_1F7B_EAC1_41B1_DCCCBBA68E4E"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BFB2AC0_1F7B_EAC1_4121_7BB2E6AD5B00",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_0BFB0AC0_1F7B_EAC1_41AD_55AEAED19F77"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BD076F6_1F74_3AC1_41B8_26661AFBD742",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_0BD066F6_1F74_3AC1_41B4_84FB2A581236"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BD096F6_1F74_3AC1_41B9_17EF41F02935",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_0BD0B6F6_1F74_3AC1_41BD_75B65028EC58"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BF79C98_1F74_6D41_4185_BA5431802D15",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_0BF78C98_1F74_6D41_41BE_62818EEBC900"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BF7FC98_1F74_6D41_41B6_A53D8553BE39",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_0BF7DC98_1F74_6D41_41BC_185308D55476"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "5%",
 "bottom": "84.78%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EDDBADF8_FB5E_35F0_41D0_29F5028ADDF0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E705E4BB_FB42_0A70_41D6_83CA26DF9017",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E6299A69_FAC2_1E11_41EA_F89BCA926187",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1382648_FB42_3610_41CF_6A7024CB68E3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_E101741C_FB4E_0A30_41E9_97E039338E99",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF303BA1_FF4E_1E11_41EE_84DB44949658",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF304BA1_FF4E_1E11_41EA_3D33A354F5F4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_8_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF308BA1_FF4E_1E11_41E4_96596611F331",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_9_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF30CBA1_FF4E_1E11_41D1_E1DFCB5BE3B1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1F87349_FAC6_0E11_41C5_25EDB7FB7663",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1487B03_FAC2_1E11_41EE_4A0098A14815",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1F88349_FAC6_0E11_41EF_03B374BDC704",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_DF352BA1_FF4E_1E11_41C6_734AC9B62089",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF357BA1_FF4E_1E11_41E5_480D5D888468",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E011F337_FB42_0E70_41E4_4AAF89C31ACB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_1_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF31ABA1_FF4E_1E11_41C3_D2518E3D56D7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF31EBA1_FF4E_1E11_41E6_79873187A674",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF3E3BA1_FF4E_1E11_41E1_02DDAA8E9093",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF3E5BA1_FF4E_1E11_41DD_81AB74EA9161",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF3EBBB0_FF4E_1E70_41E9_CA0AD1973A7F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF3EDBB0_FF4E_1E70_41E0_268F8BE126B2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF3F0BB0_FF4E_1E70_41ED_3831F84BB7CF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_EE796367_FB7E_0E10_4188_DB76611B6BC4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0_HS_1_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_DF3C4BB0_FF4E_1E70_41E2_F83D672F43B7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E3D0437D_FB46_0EF0_41E9_9C3BF7D60235",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_E1FFF34A_FAC6_0E13_41B9_480D97C451E8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_E6287A68_FAC2_1E1F_41C9_855D9FB56409",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1FF6349_FAC6_0E11_41E5_D1431ECAB3F1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E0174336_FB42_0E70_41D9_D2F28C0D7B19",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E6D9C35D_FB42_0E31_41EC_A3FAFD82707F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_E7F47B09_FB42_3E10_41C9_7DEA93FCE687",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E629FA69_FAC2_1E11_41DA_8CDF32C06FB0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C01EB1F_1CD6_9809_41B6_6181C41968A3",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "35.439%",
 "children": [
  "this.Image_0C01DB1F_1CD6_9809_4192_BC0BE8D43F76"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0C01CB1F_1CD6_9809_4197_70BBA1BDEB65",
 "backgroundOpacity": 1,
 "paddingLeft": 45,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "63.293%",
 "children": [
  "this.Container_0C01BB1F_1CD6_9809_4192_54003074F660",
  "this.Container_0C019B1F_1CD6_9809_419B_F79BBA4DA056"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 28,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C012B1F_1CD6_9809_41A0_0A2EC2AA7ECA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0C011B1F_1CD6_9809_419C_A1F1E661208C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0C010B1F_1CD6_9809_418E_62E1D3E4DBDA, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0C011B1F_1CD6_9809_419C_A1F1E661208C.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0C011B1F_1CD6_9809_419C_A1F1E661208C_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_040D987E_0B9F_5A87_419F_4A3291998E05",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "36.024%",
 "children": [
  "this.Image_0610552D_0BAF_A40D_4191_28443E6AFB27"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_040D787E_0B9F_5A87_419F_C8E0BEBDCDAB",
 "backgroundOpacity": 1,
 "paddingLeft": 25,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "62.5%",
 "children": [
  "this.Container_040D487E_0B9F_5A87_419E_3ECDBFD28403",
  "this.Container_040D587E_0B9F_5A87_4188_E3AA0B276274",
  "this.Container_040EC87E_0B9F_5A87_4186_B53E14004D8F"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 24,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_040EA87E_0B9F_5A87_4185_8B5264A35EA9",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_040EB87E_0B9F_5A87_4180_6BACBAB8AB2A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_040E887E_0B9F_5A87_4195_8B0D3FE67E31, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_040EB87E_0B9F_5A87_4180_6BACBAB8AB2A.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_040EB87E_0B9F_5A87_4180_6BACBAB8AB2A_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B02254C_0B9E_CA8B_41A3_EF08DABE7E2E",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "34.147%",
 "children": [
  "this.Image_05B5444F_0BB8_E40D_4191_94F9B8449B0F"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_1B02654C_0B9E_CA8B_4186_DFAAF3A1AE61",
 "backgroundOpacity": 1,
 "paddingLeft": 20,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "64.399%",
 "children": [
  "this.Container_1B02754C_0B9E_CA8B_4181_E79053D6D85A",
  "this.Container_1B02854C_0B9E_CA8B_418B_F77691141A1B",
  "this.Container_1BC3C54C_0B9E_CA8B_416E_50DE585C08EB"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 24,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1BC3E54C_0B9E_CA8B_418F_741FCFCCF7E5",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_1BC2054C_0B9E_CA8B_41A0_36DD243E2026",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_1BC2354C_0B9E_CA8B_4190_FCEDFE004ADA, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_1BC2054C_0B9E_CA8B_41A0_36DD243E2026.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_1BC2054C_0B9E_CA8B_41A0_36DD243E2026_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0431E18C_0B9E_CD84_4195_DA6CCD2C0A73",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "34.76%",
 "children": [
  "this.Image_059153D7_0BBB_9C1E_4181_4C73421D1D59"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0431D18C_0B9E_CD84_4198_1372F68AE2D1",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "64.085%",
 "children": [
  "this.Container_0430218C_0B9E_CD84_419B_867112395616",
  "this.Container_0430318C_0B9E_CD84_4196_48394E53BB32",
  "this.Container_0430518C_0B9E_CD84_41A2_1A8EB8B0348C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 24,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0430B18C_0B9E_CD84_4176_F9C97353AC04",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0430818C_0B9E_CD84_41A3_C23CD8CB64EC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0430918C_0B9E_CD84_41A7_21BEA33DB9F5, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0430818C_0B9E_CD84_41A3_C23CD8CB64EC.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0430818C_0B9E_CD84_41A3_C23CD8CB64EC_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_041F0BBA_0B91_3D8C_4150_BA528BAA112A",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "40.195%",
 "children": [
  "this.Image_0E2F721B_1EDC_3547_41A9_22F65F823D79"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_041F6BBA_0B91_3D8C_4192_1B9ECF38DC09",
 "backgroundOpacity": 1,
 "paddingLeft": 20,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "58.877%",
 "children": [
  "this.Container_041F5BBA_0B91_3D8C_41A0_16C31FEB90FC",
  "this.Container_041F4BBA_0B91_3D8C_419C_0496529FCDC7",
  "this.Container_041FDBBA_0B91_3D8C_419A_D79B2C69BDA8"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 24,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_041E3BBA_0B91_3D8C_4185_45371B92B725",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_041E2BBA_0B91_3D8C_419B_E93D944161DD",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_041E1BBA_0B91_3D8C_417D_81C906B56586, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_041E2BBA_0B91_3D8C_419B_E93D944161DD.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_041E2BBA_0B91_3D8C_419B_E93D944161DD_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B48A034_0B92_CA84_4187_9FEFAF6D67DD",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "36.458%",
 "children": [
  "this.Image_00D52D01_0FAC_F98A_415C_101ECDB2A1E8"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_1B48C034_0B92_CA84_4197_302615B9D68E",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "62.16%",
 "children": [
  "this.Container_1B48D034_0B92_CA84_4188_7C95A7EC1D73",
  "this.Container_1B48E034_0B92_CA84_41A5_95796D30A46E",
  "this.Container_1B4F4034_0B92_CA84_41A4_B00E7568ABCF"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 24,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B4F6034_0B92_CA84_419C_605AB6C2664D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_1B4FA034_0B92_CA84_4198_E3DAAF86C465",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_1B4FB034_0B92_CA84_4186_DC92638A9C09, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_1B4FA034_0B92_CA84_4198_E3DAAF86C465.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_1B4FA034_0B92_CA84_4198_E3DAAF86C465_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_191BAC8B_0FDB_B89E_41AC_82EAE282D578",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "40.648%",
 "children": [
  "this.Image_1A83F053_0FA4_678F_4185_33AAD086AE7C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_191BDC8B_0FDB_B89E_41AC_C4489D1FB1C6",
 "backgroundOpacity": 1,
 "paddingLeft": 43,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "58.424%",
 "children": [
  "this.Container_191BFC8B_0FDB_B89E_419E_6DC05A02FCAB",
  "this.Container_18E40C8B_0FDB_B89E_419A_361EF28DB21B",
  "this.Container_18E46C8B_0FDB_B89E_41A1_901924F7CD39"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 24,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_18E4AC8B_0FDB_B89E_4194_6D21551B7EDB",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_18E4CC8B_0FDB_B89E_41AA_1B7B74E23C28",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_18E4FC8B_0FDB_B89E_41A3_448E2AB47E64, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_18E4CC8B_0FDB_B89E_41AA_1B7B74E23C28.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_18E4CC8B_0FDB_B89E_41AA_1B7B74E23C28_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_054C86D4_10AD_A88A_41A3_4251E516367C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.IconButton_054C96D4_10AD_A88A_41A5_B93F3A7ABD0E"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "minWidth": 1,
 "height": 140,
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "maxHeight": 595,
 "horizontalAlign": "center",
 "id": "Image_041D5428_1F74_1D41_4196_D26CA9EE0E20",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "99.999%",
 "borderRadius": 0,
 "url": "skin/Image_041D5428_1F74_1D41_4196_D26CA9EE0E20.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "bottom": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fill",
 "data": {
  "name": "Image53121"
 },
 "paddingBottom": 0,
 "maxWidth": 842
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F5CF972_1EEC_17C1_41BC_F51457EBDD64",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "41.44%",
 "children": [
  "this.Image_0F8458DE_1EEC_16C1_41A9_0C5C733D4267"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0F5CD972_1EEC_17C1_41B6_669F71ABDC31",
 "backgroundOpacity": 1,
 "paddingLeft": 45,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "58.764%",
 "children": [
  "this.Container_0F5D2972_1EEC_17C1_41B6_D7170A04D68E",
  "this.Container_0F5D0972_1EEC_17C1_4170_EAC45B331D9A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 28,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F5D8972_1EEC_17C1_41AB_6B83A5112E62",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0F5D9972_1EEC_17C1_41BB_AEDE5429BFDA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0F5DE972_1EEC_17C1_41B1_02921B0E8979, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0F5D9972_1EEC_17C1_41BB_AEDE5429BFDA.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0F5D9972_1EEC_17C1_41BB_AEDE5429BFDA_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0FF487F2_1EEC_1AC1_4195_20B9A61C7064",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "40.421%",
 "children": [
  "this.Image_0F8C1C46_1EF4_6DC1_41B4_4EA498C3EBD8"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0FF4A7F2_1EEC_1AC1_41AF_833FCE7A4061",
 "backgroundOpacity": 1,
 "paddingLeft": 45,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "58.424%",
 "children": [
  "this.Container_0FF547F2_1EEC_1AC1_417B_30D53F5F37D8",
  "this.Container_0FF567F2_1EEC_1AC1_41B7_4016D771C64A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 28,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E343802_1EEC_1541_419A_DB5005C054AE",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0E34C802_1EEC_1541_41A5_210C6C7808D1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0E34D802_1EEC_1541_41AD_01447A669164, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0E34C802_1EEC_1541_41A5_210C6C7808D1.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0E34C802_1EEC_1541_41A5_210C6C7808D1_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0EA7EC61_1EEC_EDC3_41BA_3EF9CD120A35",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "43.025%",
 "children": [
  "this.Image_0FEBBD89_1EF4_6F43_41B5_CD3A481C5260"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0EA7CC61_1EEC_EDC3_419F_804F66A58A34",
 "backgroundOpacity": 1,
 "paddingLeft": 45,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "56.612%",
 "children": [
  "this.Container_0EA7BC61_1EEC_EDC3_41AA_B9872267DDBD",
  "this.Container_0EA79C61_1EEC_EDC3_4196_1DC8137D7EB6"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 28,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0EA02C61_1EEC_EDC3_41A3_0B37346F7964",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0EA01C61_1EEC_EDC3_41A2_98695EDBFA4F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0EA00C61_1EEC_EDC3_41BC_16CB7FA1D299, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0EA01C61_1EEC_EDC3_41A2_98695EDBFA4F.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0EA01C61_1EEC_EDC3_41A2_98695EDBFA4F_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F901448_1EEC_3DC1_4190_DB934427B286",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "42.912%",
 "children": [
  "this.Image_0F087CE3_1EF4_2EC7_4197_6143B94D9BCC"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0F903448_1EEC_3DC1_41B1_F5A61DF5B7A6",
 "backgroundOpacity": 1,
 "paddingLeft": 45,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "57.178%",
 "children": [
  "this.Container_0F905448_1EEC_3DC1_41B3_FD9F8FA47766",
  "this.Container_0F907448_1EEC_3DC1_41AB_6ABC2EF886B1"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 28,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0FD0D448_1EEC_3DC1_41AA_E97D870D0BA9",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0FD0C448_1EEC_3DC1_41A2_01A75E614493",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0FD0F448_1EEC_3DC1_41A3_5F66023D9F61, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0FD0C448_1EEC_3DC1_41A2_01A75E614493.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0FD0C448_1EEC_3DC1_41A2_01A75E614493_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F95CBFE_1EEC_6AC1_41AA_FC434A23A5DA",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "44.384%",
 "children": [
  "this.Image_0F3F3E69_1EEC_2DC3_4195_FA17CACDCED5"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0F952BFE_1EEC_6AC1_41B8_40336AACAD30",
 "backgroundOpacity": 1,
 "paddingLeft": 45,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "54.461%",
 "children": [
  "this.Container_0F950BFE_1EEC_6AC1_41B9_E4B54784FE5B",
  "this.Container_0F956BFE_1EEC_6AC1_4171_F7509E2E989D"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 28,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F969BFE_1EEC_6AC1_41B3_453B9D7F311E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0F96EBFE_1EEC_6AC1_41B5_7F25EF629F24",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0F96FBFE_1EEC_6AC1_41B2_60C48338CE6B, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0F96EBFE_1EEC_6AC1_41B5_7F25EF629F24.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0F96EBFE_1EEC_6AC1_41B5_7F25EF629F24_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E572439_1ED4_1D43_41AC_796266182B2B",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "overflow": "scroll",
 "width": "41.214%",
 "children": [
  "this.Image_0CE47254_1ED4_15C1_41B4_E7F6A9646E6F"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0E570439_1ED4_1D43_41BC_1D3D096D430B",
 "backgroundOpacity": 1,
 "paddingLeft": 45,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "58.424%",
 "children": [
  "this.Container_0E571439_1ED4_1D43_41B1_2D675BB9E902",
  "this.Container_0E56F439_1ED4_1D43_4189_318183F85163"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 28,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E566439_1ED4_1D43_418C_CCB086464ED5",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0E567439_1ED4_1D43_41B1_101478B70E8E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0E564439_1ED4_1D43_41BC_BC2700946726, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0E567439_1ED4_1D43_41B1_101478B70E8E.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0E567439_1ED4_1D43_41B1_101478B70E8E_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0946C0AF_1FAC_355F_41A3_9C7EF5AF0591",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "99.977%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "29.298%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container57321"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_08394684_1F54_7D41_418A_72E4D7E0BE17",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "99.977%",
 "children": [
  "this.Button_0983DAE6_1FAC_2AC1_41A4_EF396039B5CD",
  "this.Button_0815FAE1_1FAC_2AC3_4190_3B63988E4C36",
  "this.Button_08633C19_1FAC_2D43_41AD_FA94AA2573A2"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "25.613%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container56923"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_080A242B_1FAC_1D47_41A9_9D741B5AF8D7",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "99.977%",
 "children": [
  "this.Button_083463E9_1FAC_1AC3_4194_19B57DF43B10",
  "this.Button_083443E9_1FAC_1AC3_41BD_DAE068CE80A9",
  "this.Button_0837B3E9_1FAC_1AC3_4186_B24E73AD2918"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "25.613%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container56923"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_073BF71B_1F54_1B47_41BF_18A7B927CBF7",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "1.623%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container12998"
 },
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_073BD71B_1F54_1B47_41AE_CFDE926A37ED",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_073BA71B_1F54_1B47_41AD_98F23ED5E554, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_073BD71B_1F54_1B47_41AE_CFDE926A37ED.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_073BD71B_1F54_1B47_41AE_CFDE926A37ED_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BA669B1_1F7C_1743_41BC_E23F4262DCB8",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://sketchfab.com/models/6a9a3951605d4a498c8b371b848813ab/embed",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "WebFrame",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame284417"
 }
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0BA619B1_1F7C_1743_41B0_59972C6193E6",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0BA619B1_1F7C_1743_41B0_59972C6193E6.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0BA619B1_1F7C_1743_41B0_59972C6193E6_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BBAFD60_1F7F_EFC1_419A_348995F02937",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://sketchfab.com/models/662b87fd785e47efa76e5d97c3500709/embed",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "WebFrame",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame284417"
 }
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0BBAAD60_1F7F_EFC1_41A8_E7AE96AC6A17",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0BBAAD60_1F7F_EFC1_41A8_E7AE96AC6A17.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0BBAAD60_1F7F_EFC1_41A8_E7AE96AC6A17_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_096B82AF_1F7C_155F_41AF_158FE7F3476B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://sketchfab.com/models/f7554354af304aa0b847c27b8838db21/embed",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "WebFrame",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame284417"
 }
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_096BB2AF_1F7C_155F_41A4_EF75318506EA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_096BB2AF_1F7C_155F_41A4_EF75318506EA.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_096BB2AF_1F7C_155F_41A4_EF75318506EA_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BFB3AC0_1F7B_EAC1_41B1_DCCCBBA68E4E",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://sketchfab.com/models/3feb2527f31641e6aceb83913e8a1e3a/embed",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "WebFrame",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame284417"
 }
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0BFB0AC0_1F7B_EAC1_41AD_55AEAED19F77",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0BFB0AC0_1F7B_EAC1_41AD_55AEAED19F77.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0BFB0AC0_1F7B_EAC1_41AD_55AEAED19F77_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BD066F6_1F74_3AC1_41B4_84FB2A581236",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://sketchfab.com/models/bdf38319f9294b1cb31a7c1bb3ee3a21/embed",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "WebFrame",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame284417"
 }
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0BD0B6F6_1F74_3AC1_41BD_75B65028EC58",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0BD0B6F6_1F74_3AC1_41BD_75B65028EC58.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0BD0B6F6_1F74_3AC1_41BD_75B65028EC58_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BF78C98_1F74_6D41_41BE_62818EEBC900",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://sketchfab.com/models/495a55eb95b64b6497cce8d6663f829f/embed",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "WebFrame",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame284417"
 }
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_0BF7DC98_1F74_6D41_41BC_185308D55476",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "IconButton",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_0BF7DC98_1F74_6D41_41BC_185308D55476.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "pressedRollOverIconURL": "skin/IconButton_0BF7DC98_1F74_6D41_41BC_185308D55476_pressed_rollover.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1549,
 "horizontalAlign": "center",
 "id": "Image_0C01DB1F_1CD6_9809_4192_BC0BE8D43F76",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0C01DB1F_1CD6_9809_4192_BC0BE8D43F76.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Image5874"
 },
 "maxWidth": 774
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C01BB1F_1CD6_9809_4192_54003074F660",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "94.077%",
 "children": [
  "this.HTMLText_0C01AB1F_1CD6_9809_41A3_BDC06163E65D"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 95,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0C019B1F_1CD6_9809_419B_F79BBA4DA056",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0C017B1F_1CD6_9809_41AB_509BD7964F25",
  "this.Container_0C015B1F_1CD6_9809_41AD_D9ED4B81197A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "73.082%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "maxHeight": 1549,
 "horizontalAlign": "center",
 "id": "Image_0610552D_0BAF_A40D_4191_28443E6AFB27",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2.19%",
 "width": "94.671%",
 "borderRadius": 0,
 "url": "skin/Image_0610552D_0BAF_A40D_4191_28443E6AFB27.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "-0.06%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Image2824"
 },
 "maxWidth": 774
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_040D487E_0B9F_5A87_419E_3ECDBFD28403",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0CE79AE2_1ED4_2AC1_41AA_DC7F86283B76"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 104,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_040D587E_0B9F_5A87_4188_E3AA0B276274",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_040D287E_0B9F_5A87_4188_76CEDC92B12A",
  "this.Container_040EE87E_0B9F_5A87_4176_A6C1A2B34850"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "71.185%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_040EC87E_0B9F_5A87_4186_B53E14004D8F",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "maxHeight": 1612,
 "horizontalAlign": "center",
 "id": "Image_05B5444F_0BB8_E40D_4191_94F9B8449B0F",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_05B5444F_0BB8_E40D_4191_94F9B8449B0F.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Image3165"
 },
 "maxWidth": 744
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B02754C_0B9E_CA8B_4181_E79053D6D85A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0F2209FC_1ED4_76C1_418D_A7AB945BD341"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 112,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_1B02854C_0B9E_CA8B_418B_F77691141A1B",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_1BC3854C_0B9E_CA8B_41A6_6D1CDB7CE231",
  "this.Container_1BC3A54C_0B9E_CA8B_4157_AF913A44E8D6"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "69.781%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1BC3C54C_0B9E_CA8B_416E_50DE585C08EB",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "maxHeight": 1549,
 "horizontalAlign": "center",
 "id": "Image_059153D7_0BBB_9C1E_4181_4C73421D1D59",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "93.082%",
 "borderRadius": 0,
 "url": "skin/Image_059153D7_0BBB_9C1E_4181_4C73421D1D59.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Image3477"
 },
 "maxWidth": 2000
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0430218C_0B9E_CD84_419B_867112395616",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0F621625_1ED4_1D43_41B7_CC79F1B84F38"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 106,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0430318C_0B9E_CD84_4196_48394E53BB32",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0430018C_0B9E_CD84_418F_846F5E5D8CD1",
  "this.Container_0430718C_0B9E_CD84_418B_1984BE412F78"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "70.985%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0430518C_0B9E_CD84_41A2_1A8EB8B0348C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "maxHeight": 1612,
 "horizontalAlign": "center",
 "id": "Image_0E2F721B_1EDC_3547_41A9_22F65F823D79",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0E2F721B_1EDC_3547_41A9_22F65F823D79.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Image7995"
 },
 "maxWidth": 744
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_041F5BBA_0B91_3D8C_41A0_16C31FEB90FC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0FD1C200_1ED4_3541_41B6_7F7FC4CE4BA4"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 94,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_041F4BBA_0B91_3D8C_419C_0496529FCDC7",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_041FBBBA_0B91_3D8C_41A3_F9909C3907D3",
  "this.Container_041FFBBA_0B91_3D8C_419B_65908577B156"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "73.391%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_041FDBBA_0B91_3D8C_419A_D79B2C69BDA8",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "maxHeight": 1437,
 "horizontalAlign": "center",
 "id": "Image_00D52D01_0FAC_F98A_415C_101ECDB2A1E8",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_00D52D01_0FAC_F98A_415C_101ECDB2A1E8.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Image4466"
 },
 "maxWidth": 834
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B48D034_0B92_CA84_4188_7C95A7EC1D73",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0F2CC8E3_1ED4_F6C7_41A0_3555BEDE019D"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 108,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_1B48E034_0B92_CA84_41A5_95796D30A46E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_1B4F0034_0B92_CA84_41A2_77D14D7CCC28",
  "this.Container_1B4F2034_0B92_CA84_4186_F5D7309BA470"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "69.781%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B4F4034_0B92_CA84_41A4_B00E7568ABCF",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "maxHeight": 1612,
 "horizontalAlign": "center",
 "id": "Image_1A83F053_0FA4_678F_4185_33AAD086AE7C",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_1A83F053_0FA4_678F_4185_33AAD086AE7C.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Image30897"
 },
 "maxWidth": 744
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_191BFC8B_0FDB_B89E_419E_6DC05A02FCAB",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0F787D84_1ED4_2F40_41B7_F3CE126380B1"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 92,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_18E40C8B_0FDB_B89E_419A_361EF28DB21B",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_18E41C8B_0FDB_B89E_41A1_8101E8AB9723",
  "this.Container_18E43C8B_0FDB_B89E_4180_EF9AD1A1077D"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "69.781%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_18E46C8B_0FDB_B89E_41A1_901924F7CD39",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "maxHeight": 60,
 "horizontalAlign": "right",
 "id": "IconButton_054C96D4_10AD_A88A_41A5_B93F3A7ABD0E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "7.764%",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.429%",
 "paddingTop": 0,
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_054C96D4_10AD_A88A_41A5_B93F3A7ABD0E.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 844,
 "horizontalAlign": "right",
 "id": "Image_0F8458DE_1EEC_16C1_41A9_0C5C733D4267",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0F8458DE_1EEC_16C1_41A9_0C5C733D4267.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image13694"
 },
 "maxWidth": 1421
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F5D2972_1EEC_17C1_41B6_D7170A04D68E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "94.077%",
 "children": [
  "this.HTMLText_0F5D3972_1EEC_17C1_41A4_488495142899"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 95,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0F5D0972_1EEC_17C1_4170_EAC45B331D9A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0F5D1972_1EEC_17C1_4190_B8DB238C3AE2",
  "this.Container_0F5D4972_1EEC_17C1_419C_E2E785358CC0"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "73.082%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "maxHeight": 852,
 "horizontalAlign": "right",
 "id": "Image_0F8C1C46_1EF4_6DC1_41B4_4EA498C3EBD8",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0F8C1C46_1EF4_6DC1_41B4_4EA498C3EBD8.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image14040"
 },
 "maxWidth": 1407
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0FF547F2_1EEC_1AC1_417B_30D53F5F37D8",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "94.077%",
 "children": [
  "this.HTMLText_0FF557F2_1EEC_1AC1_41BA_F3AE8A2747A7"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 95,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0FF567F2_1EEC_1AC1_41B7_4016D771C64A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0E346802_1EEC_1541_41BB_814EBC831832",
  "this.Container_0E340802_1EEC_1541_41B9_D4848EBAC8FB"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "73.082%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "maxHeight": 744,
 "horizontalAlign": "center",
 "id": "Image_0FEBBD89_1EF4_6F43_41B5_CD3A481C5260",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0FEBBD89_1EF4_6F43_41B5_CD3A481C5260.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image14891"
 },
 "maxWidth": 1612
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0EA7BC61_1EEC_EDC3_41AA_B9872267DDBD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "94.077%",
 "children": [
  "this.HTMLText_0EA7AC61_1EEC_EDC3_41B3_A4668EE79615"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 95,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0EA79C61_1EEC_EDC3_4196_1DC8137D7EB6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0EA78C61_1EEC_EDC3_41B9_806732EA2AB8",
  "this.Container_0EA05C61_1EEC_EDC3_41AA_B174C261F0BD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "73.082%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "maxHeight": 774,
 "horizontalAlign": "center",
 "id": "Image_0F087CE3_1EF4_2EC7_4197_6143B94D9BCC",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0F087CE3_1EF4_2EC7_4197_6143B94D9BCC.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image15496"
 },
 "maxWidth": 1549
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F905448_1EEC_3DC1_41B3_FD9F8FA47766",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "94.162%",
 "children": [
  "this.HTMLText_0F904448_1EEC_3DC1_41B8_AC58E3E2445D"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 90,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0F907448_1EEC_3DC1_41AB_6ABC2EF886B1",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0FD76448_1EEC_3DC1_4191_4B4395AF6D75",
  "this.Container_0FD08448_1EEC_3DC1_41B5_52DCB96E418B"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "73.082%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "maxHeight": 397,
 "horizontalAlign": "center",
 "id": "Image_0F3F3E69_1EEC_2DC3_4195_FA17CACDCED5",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0F3F3E69_1EEC_2DC3_4195_FA17CACDCED5.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "minWidth": 1,
 "height": "75.952%",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image15776"
 },
 "paddingBottom": 0,
 "maxWidth": 703
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F950BFE_1EEC_6AC1_41B9_E4B54784FE5B",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "94.077%",
 "children": [
  "this.HTMLText_0F951BFE_1EEC_6AC1_41AB_542545E8429C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 95,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0F956BFE_1EEC_6AC1_4171_F7509E2E989D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0F957BFE_1EEC_6AC1_41AA_E273C5C06A3B",
  "this.Container_0F955BFE_1EEC_6AC1_41B4_87AE6C9F6ED9"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "73.082%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "maxHeight": 774,
 "horizontalAlign": "center",
 "id": "Image_0CE47254_1ED4_15C1_41B4_E7F6A9646E6F",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0CE47254_1ED4_15C1_41B4_E7F6A9646E6F.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image21417"
 },
 "maxWidth": 1549
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E571439_1ED4_1D43_41B1_2D675BB9E902",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "94.077%",
 "children": [
  "this.HTMLText_0E56E439_1ED4_1D43_41A0_21F2BFECD0A2"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "bottom",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 95,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0E56F439_1ED4_1D43_4189_318183F85163",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0E56C439_1ED4_1D43_41B2_147BACBE1893",
  "this.Container_0E56B439_1ED4_1D43_41B0_1077457119A2"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 200,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 9,
 "borderSize": 0,
 "height": "73.082%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "textDecoration": "none",
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "id": "Button_0983DAE6_1FAC_2AC1_41A4_EF396039B5CD",
 "backgroundOpacity": 0.38,
 "pressedFontColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "width": 218,
 "shadowColor": "#000000",
 "borderRadius": 10,
 "iconHeight": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC, true, 0, this.effect_036B1FB3_1FDC_6B47_41B2_FF4D6EEBB4BE, 'showEffect', false)",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "rollOverFontColor": "#000000",
 "mode": "push",
 "minWidth": 1,
 "fontSize": "22px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 71,
 "label": "3D Bedogol Kiri",
 "shadow": false,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "id": "Button_0815FAE1_1FAC_2AC3_4190_3B63988E4C36",
 "backgroundOpacity": 0.38,
 "pressedFontColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "width": 218,
 "shadowColor": "#000000",
 "borderRadius": 10,
 "iconHeight": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360, true, 0, this.effect_04FE4F27_1FDC_2B4F_41B4_1F4DCBE5A28F, 'showEffect', false)",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "rollOverFontColor": "#000000",
 "mode": "push",
 "minWidth": 1,
 "fontSize": "22px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 71,
 "label": "3D Bedogol Kanan",
 "shadow": false,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "id": "Button_08633C19_1FAC_2D43_41AD_FA94AA2573A2",
 "backgroundOpacity": 0.38,
 "pressedFontColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "width": 218,
 "shadowColor": "#000000",
 "borderRadius": 10,
 "iconHeight": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872, true, 0, this.effect_04F49D2D_1FDC_2F43_41B8_7336735597E4, 'showEffect', false)",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "rollOverFontColor": "#000000",
 "mode": "push",
 "minWidth": 1,
 "fontSize": "22px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 71,
 "label": "3D Bhatari Durga Kiri",
 "shadow": false,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "id": "Button_083463E9_1FAC_1AC3_4194_19B57DF43B10",
 "backgroundOpacity": 0.38,
 "pressedFontColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "width": 218,
 "shadowColor": "#000000",
 "borderRadius": 10,
 "iconHeight": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30, true, 0, this.effect_049FAA96_1FD4_1541_41A3_3F738E47771F, 'showEffect', false)",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "rollOverFontColor": "#000000",
 "mode": "push",
 "minWidth": 1,
 "fontSize": "22px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 71,
 "label": "3D Bhatari Durga Kanan",
 "shadow": false,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "id": "Button_083443E9_1FAC_1AC3_41BD_DAE068CE80A9",
 "backgroundOpacity": 0.38,
 "pressedFontColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "width": 218,
 "shadowColor": "#000000",
 "borderRadius": 10,
 "iconHeight": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47, true, 0, this.effect_04F1828C_1FD4_1541_41A6_701F6C6BA119, 'showEffect', false)",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "rollOverFontColor": "#000000",
 "mode": "push",
 "minWidth": 1,
 "fontSize": "17px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 71,
 "label": "3D B. Durga pada Pelinggih Kiri",
 "shadow": false,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "id": "Button_0837B3E9_1FAC_1AC3_4186_B24E73AD2918",
 "backgroundOpacity": 0.38,
 "pressedFontColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "width": 218,
 "shadowColor": "#000000",
 "borderRadius": 10,
 "iconHeight": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435, true, 0, this.effect_04F5F9D1_1FD4_76C3_41AB_10539A0D8E94, 'showEffect', false)",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "rollOverFontColor": "#000000",
 "mode": "push",
 "minWidth": 1,
 "fontSize": "17px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 71,
 "label": "3D B. Durga pada Pelinggih Kanan",
 "shadow": false,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0C01AB1F_1CD6_9809_41A3_BDC06163E65D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">belkul\u00d0\u00a1l/.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0C017B1F_1CD6_9809_41AB_509BD7964F25",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "19.891%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Bale Kulkul</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C015B1F_1CD6_9809_41AD_D9ED4B81197A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0C014B1F_1CD6_9809_4197_3BA759D59E25"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 19,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "81.501%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0CE79AE2_1ED4_2AC1_41AA_DC7F86283B76",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">p)li\\\u00e1i;rtuhyums/.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_040D287E_0B9F_5A87_4188_76CEDC92B12A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "26.879%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Pelinggih Ratu Ayu Mas</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_040EE87E_0B9F_5A87_4176_A6C1A2B34850",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_040EF87E_0B9F_5A87_418C_EC01627BD9CE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 22,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "68.586%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F2209FC_1ED4_76C1_418D_A7AB945BD341",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "57.609%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">p)li\\\u00e1i;rtumed.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_1BC3854C_0B9E_CA8B_41A6_6D1CDB7CE231",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "25.148%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Pelinggih Ratu Made</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1BC3A54C_0B9E_CA8B_4157_AF913A44E8D6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_1BC3B54C_0B9E_CA8B_419F_BBACE3D8C4F9"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 22,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "80.805%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F621625_1ED4_1D43_41B7_CC79F1B84F38",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">pg)edo\\n/rtup)li\\\u00e1ihn/]k\u00d3i.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0430018C_0B9E_CD84_418F_846F5E5D8CD1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "25.291%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Pagedongan Ratu Pelinggihan Sakti</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0430718C_0B9E_CD84_418B_1984BE412F78",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0430418C_0B9E_CD84_4188_EEC1995F4DF8"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 22,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "79.646%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0FD1C200_1ED4_3541_41B6_7F7FC4CE4BA4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.8vh;font-family:'Bali Simbar-B';\">p)li\\\u00e1i;rtuezomn/]k\u00d3ip)\\d\\n/.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_041FBBBA_0B91_3D8C_41A3_F9909C3907D3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "34.831%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.48vh;font-family:'Otama.ep';\"><U>Pelinggih Ratu Nyoman Sakti Pengadangan</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_041FFBBA_0B91_3D8C_419B_65908577B156",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_041FEBBA_0B91_3D8C_4190_2B401FB29238"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 22,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "73.746%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F2CC8E3_1ED4_F6C7_41A0_3555BEDE019D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "61.364%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">p)li\\\u00e1i;p\u00c9jpti.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_1B4F0034_0B92_CA84_41A2_77D14D7CCC28",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "18.879%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Pelinggih Prajapati</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B4F2034_0B92_CA84_4186_F5D7309BA470",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_1B4F3034_0B92_CA84_4192_EFBA5FFEFAD7"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 22,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "82.544%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F787D84_1ED4_2F40_41B7_F3CE126380B1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">ekori\u00c1gu*.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_18E41C8B_0FDB_B89E_41A1_8101E8AB9723",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "14.201%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Kori Agung</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_18E43C8B_0FDB_B89E_4180_EF9AD1A1077D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_18E44C8B_0FDB_B89E_4174_D55F95928996"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 22,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "83.728%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F5D3972_1EEC_17C1_41A4_488495142899",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">belpsn)kn/.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F5D1972_1EEC_17C1_4190_B8DB238C3AE2",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "19.619%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Bale Pasanekan</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F5D4972_1EEC_17C1_419C_E2E785358CC0",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0F5D5972_1EEC_17C1_41B6_93649DEA7282"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 19,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "81.501%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0FF557F2_1EEC_1AC1_41BA_F3AE8A2747A7",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">beleg*o.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0E346802_1EEC_1541_41BB_814EBC831832",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "15.804%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Bale Gong</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E340802_1EEC_1541_41B9_D4848EBAC8FB",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0E341802_1EEC_1541_41A6_350B08AD41F5"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 19,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "81.501%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0EA7AC61_1EEC_EDC3_41B3_A4668EE79615",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">p)w\u00cfgn/.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0EA78C61_1EEC_EDC3_41B9_806732EA2AB8",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "15.531%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Pewaregan</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0EA05C61_1EEC_EDC3_41AA_B174C261F0BD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0EA04C61_1EEC_EDC3_41B6_D59AC61ED5B4"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 19,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "81.501%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F904448_1EEC_3DC1_41B8_AC58E3E2445D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">belskpt/.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0FD76448_1EEC_3DC1_4191_4B4395AF6D75",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "19.346%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Bale Sakapat</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0FD08448_1EEC_3DC1_41B5_52DCB96E418B",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0FD0B448_1EEC_3DC1_41B0_3AD3C4BD6986"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 19,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "81.501%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F951BFE_1EEC_6AC1_41AB_542545E8429C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">est\u00c9.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0F957BFE_1EEC_6AC1_41AA_E273C5C06A3B",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "12.534%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Setra</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F955BFE_1EEC_6AC1_41B4_87AE6C9F6ED9",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0F96ABFE_1EEC_6AC1_41B0_B31558122F1E"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 19,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "81.501%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0E56E439_1ED4_1D43_41A0_21F2BFECD0A2",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "68%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.14vh;font-family:'Bali Simbar-B';\">piysn/.belp)mujn/.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0E56C439_1ED4_1D43_41B2_147BACBE1893",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "20.163%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.31vh;font-family:'Otama.ep';\"><U>Piasan/Bale Pemujan</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0E56B439_1ED4_1D43_41B0_1077457119A2",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0E568439_1ED4_1D43_41B0_9079F8808DCC"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 19,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "81.501%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0C014B1F_1CD6_9809_4197_3BA759D59E25",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tempat </SPAN><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\"><I>Kulkul</I></SPAN><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\"> (Kentongan) sebagai isyarat kepada masyarakat desa bahwa upacara akan dimulai atau sudah selesai.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Panjang: 300 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Lebar: 300 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tinggi: 450 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Bahan: Batu Karangasem</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\"><U>-8.591674820042366, 115.12742306691374</U></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_040EF87E_0B9F_5A87_418C_EC01627BD9CE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "98.537%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tempat </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>melinggih </I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">atau stana Juru Rias.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Panjang: 156 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Lebar: 125 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tinggi: 350 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Bahan: Paras, Bata Merah, Kayu Cempaka, dan Majegau</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"font-size:2.99vh;font-family:'Open Sans Semibold';\"><U>-8.591461097482513, 115.1273889790441</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_1BC3B54C_0B9E_CA8B_419F_BBACE3D8C4F9",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tempat </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>melinggih</I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"> Ratu Made atau tempat memuja Surya.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Panjang: 156 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Lebar: 125 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tinggi: 350 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Bahan: </SPAN><SPAN STYLE=\"font-size:2.99vh;font-family:'Open Sans Semibold';\">Paras, Bata Merah, Kayu Cempaka, dan Majegau</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"font-size:2.99vh;font-family:'Open Sans Semibold';\"><U>-8.591412071501985, 115.12741841856787</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0430418C_0B9E_CD84_4188_EEC1995F4DF8",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "98.418%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tempat </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>melinggih</I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"> Ratu Pelinggihan Sakti.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Panjang: 370 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Lebar: 360 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tinggi: 450 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Bahan: Paras, Bata Merah, Kayu Cempaka, dan Majegau</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">T. Koor. : -</SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><U>8.5914327543383, 115.1274044735303</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_041FEBBA_0B91_3D8C_4190_2B401FB29238",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "98.405%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tempat </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>melinggih </I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Ratu Nyoman Sakti untuk memohon Taksu.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Panjang: </SPAN><SPAN STYLE=\"font-size:2.99vh;font-family:'Open Sans Semibold';\">156 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Lebar: </SPAN><SPAN STYLE=\"font-size:2.99vh;font-family:'Open Sans Semibold';\">125 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tinggi: </SPAN><SPAN STYLE=\"font-size:2.99vh;font-family:'Open Sans Semibold';\">355 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Bahan: Paras, Bata Merah, Kayu Cempaka, dan Majegau</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><U>-8.591397516912794, 115.12739672628719</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_1B4F3034_0B92_CA84_4192_EFBA5FFEFAD7",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "98.368%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tempat pemujaan Sang Hyang Widhi dalam prabawaNya sebagai \"Prajapati\" dan juga Dewi Durga yang terletak di </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>hulun setra</I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">/kuburan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Panjang: 350 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Lebar: 250 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tinggi: 450 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Bahan: Batu Karangasem</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><U>-8.591442712740552, 115.12755709421926</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_18E44C8B_0FDB_B89E_4174_D55F95928996",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "98.473%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>Kori Agung</I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"> terletak di bagian depan areal </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>jeroan</I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"> (dalam) Pura dan memisahkan antara areal </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>jeroan</I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"> (dalam) dengan areal </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><I>jabaan</I></SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"> (luar) Pura.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Panjang: 156 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Lebar: 125 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tinggi: 350 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Bahan: </SPAN><SPAN STYLE=\"font-size:2.99vh;font-family:'Open Sans Semibold';\">Paras, dan Bata Merah</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"color:#333333;font-size:2.99vh;font-family:'Open Sans Semibold';\"><U>-8.591461097482513, 115.1273889790441</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0F5D5972_1EEC_17C1_41B6_93649DEA7282",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tempat berkumpul untuk menyiapkan sarana upacara.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Panjang: 840 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Lebar: 600 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tinggi: 400 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Bahan: Batu Semen</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"font-size:3.32vh;font-family:'Open Sans Semibold';\"><U>-8.591576768130212, 115.12723868252806</U></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0E341802_1EEC_1541_41A6_350B08AD41F5",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tempat menyimpaan gong sekaligus untuk menabuh gamelan saat berlangsungnya upacara.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Panjang: 650 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Lebar: 420 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tinggi: 350 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Bahan: Batu Semen</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\"><U>-8.591625794089456, 115.12731460551039</U></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0EA04C61_1EEC_EDC3_41B6_D59AC61ED5B4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tempat untuk melakukan kegiatan masak-memasak.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Panjang: 840 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Lebar: 600 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tinggi: 400 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Bahan: Batu Semen</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">T. Koor. : -8.591625794089456, 115.12731460551039</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0FD0B448_1EEC_3DC1_41B0_3AD3C4BD6986",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tempat untuk meletakkan sarana upacara dan tempat untuk orang suci beristirahat atau melakukan persiapan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Panjang: 345 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Lebar: 180 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tinggi: 370 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Bahan: Batu Semen</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\"><U>-8.591425860059655, 115.12731228133747</U></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0F96ABFE_1EEC_6AC1_41B0_B31558122F1E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tempat pemakaman untuk melakukan upacara Ngaben.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Panjang: 20 m</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Lebar: 20 m</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\"><U>-8.59175925050019, 115.12728573890436</U></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0E568439_1ED4_1D43_41B0_9079F8808DCC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tempat orang suci untuk memimpin upacara.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Panjang: 456 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Lebar: 450 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tinggi: 400 cm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Bahan: Batu Semen</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">Tahun Pembuatan: 1910</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\">T. Koor. : </SPAN><SPAN STYLE=\"color:#333333;font-size:3.32vh;font-family:'Open Sans Semibold';\"><U>-8.591388324540382, 115.1273479186557</U></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.99vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 0
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player436"
 },
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "layout": "absolute",
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
