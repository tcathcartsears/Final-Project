﻿window.globalProvideData('slide', '{"title":"Question 4","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":8,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide8","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5WnrLTM0zUD","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"6BZ2f00kFpE.6kJZzbQZUK7.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6BZ2f00kFpE.5qQ2Ke7CviK.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6BZ2f00kFpE.6HeS1GkNrQk.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6BZ2f00kFpE.5ymOyp8iD4B.$DragConnectData","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6i2yS3Kxitm"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6Ix5UacprIp.InvalidPromptSlide"}}]},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5b0AZQQEuds.6ZrZHIdiVsa"}}]},"ReviewInt_6BZ2f00kFpE":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6q9nMO7wVao"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6kJZzbQZUK7"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6eaurjxDh2P"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.5qQ2Ke7CviK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6SJpBecOsk6"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6HeS1GkNrQk"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6dnc45xfyqz"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.5ymOyp8iD4B"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6i2yS3Kxitm.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5WnrLTM0zUD","typea":"var","valueb":"6eu4vS3nNZT","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10111110111"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6eu4vS3nNZT.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6BZ2f00kFpE"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6eu4vS3nNZT.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6BZ2f00kFpE"}]}]}]},"ReviewIntCorrectIncorrect_6BZ2f00kFpE":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"6BZ2f00kFpE.6q9nMO7wVao"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6BZ2f00kFpE.6kJZzbQZUK7"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6BZ2f00kFpE.6eaurjxDh2P"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6BZ2f00kFpE.5qQ2Ke7CviK"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6BZ2f00kFpE.6SJpBecOsk6"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6BZ2f00kFpE.6HeS1GkNrQk"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6BZ2f00kFpE.6dnc45xfyqz"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6BZ2f00kFpE.5ymOyp8iD4B"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_6BZ2f00kFpE":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6BZ2f00kFpE"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111110111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111110111"}]}]},"DisableChoices_6BZ2f00kFpE":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6q9nMO7wVao"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6kJZzbQZUK7"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6eaurjxDh2P"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.5qQ2Ke7CviK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6SJpBecOsk6"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6HeS1GkNrQk"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.6dnc45xfyqz"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BZ2f00kFpE.5ymOyp8iD4B"},"enabled":{"type":"boolean","value":false}}]},"6BZ2f00kFpE_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6i2yS3Kxitm.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6eu4vS3nNZT.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6BZ2f00kFpE"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6i2yS3Kxitm.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6i2yS3Kxitm.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6BZ2f00kFpE"}]}]}]}]},"SetLayout_pxabnsnfns10111110111":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111110111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111110111"}]}]},"NavigationRestrictionNextSlide_5WnrLTM0zUD":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6ZrZHIdiVsa"}}]},"NavigationRestrictionPreviousSlide_5WnrLTM0zUD":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10111110111"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10111110111"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6Ix5UacprIp","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6Ix5UacprIp","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6BZ2f00kFpE","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6BZ2f00kFpE"}],"elseActions":[{"kind":"exe_actiongroup","id":"6BZ2f00kFpE_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6BZ2f00kFpE","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5WnrLTM0zUD","typea":"var","valueb":"6eu4vS3nNZT","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6eu4vS3nNZT"},"completed_slide_ref":{"type":"string","value":"_player.5b0AZQQEuds.683c3g8R5gw"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6BZ2f00kFpE","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5WnrLTM0zUD","typea":"var","valueb":"6eu4vS3nNZT","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6eu4vS3nNZT"},"completed_slide_ref":{"type":"string","value":"_player.5b0AZQQEuds.683c3g8R5gw"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5WnrLTM0zUD"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5WnrLTM0zUD"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE.6q9nMO7wVao"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE.6kJZzbQZUK7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE.6eaurjxDh2P"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE.5qQ2Ke7CviK"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE.6SJpBecOsk6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE.6HeS1GkNrQk"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE.6dnc45xfyqz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE.5ymOyp8iD4B"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BZ2f00kFpE"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nDH5oeZyWM"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":600,"contentheight":262,"objects":[{"kind":"droparea","style":"matching","reviewdata":4,"reviewCorrectColor":"0x275114","reviewIncorrectColor":"0x8F0000","shapemaskId":"","xPos":16,"yPos":196,"tabIndex":12,"tabEnabled":true,"referenceName":"5ymOyp8iD4B","xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5ymOyp8iD4B_2100222567","type":"acctext","altText":"Integrity Report","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Integrity Report","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.562}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":16,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":127,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":695}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"5ymOyp8iD4B"},{"kind":"shufflegroup","objects":[{"kind":"dragitem","style":"matching","connectdata":"choices.choice_5bxqQHUtiKb","reviewdata":4,"reviewCorrectColor":"0x275114","reviewIncorrectColor":"0x8F0000","shapemaskId":"","xPos":324,"yPos":196,"tabIndex":13,"tabEnabled":true,"referenceName":"6dnc45xfyqz","xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6dnc45xfyqz_-1302704395","type":"acctext","altText":"Provides a report indicating if a paper is using character swaps or hidden characters.","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Provides a report indicating if a paper is using character swaps or hidden characters.","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.562}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":86,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":274,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":696}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6dnc45xfyqz"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6DBPOlAnqi5","reviewdata":3,"reviewCorrectColor":"0x275114","reviewIncorrectColor":"0x8F0000","shapemaskId":"","xPos":324,"yPos":132,"tabIndex":10,"tabEnabled":true,"referenceName":"6SJpBecOsk6","xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6SJpBecOsk6_-32184425","type":"acctext","altText":"Plagiarism-Detection Software","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Plagiarism-Detection Software","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.562}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":29,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":246,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":697}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6SJpBecOsk6"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6TYDdm1fj7h","reviewdata":2,"reviewCorrectColor":"0x275114","reviewIncorrectColor":"0x8F0000","shapemaskId":"","xPos":324,"yPos":68,"tabIndex":7,"tabEnabled":true,"referenceName":"6eaurjxDh2P","xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6eaurjxDh2P_823667150","type":"acctext","altText":"Provides a percentage of text that is found in other sources.","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Provides a percentage of text that is found in other sources.","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.562}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":61,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":270,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":698}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6eaurjxDh2P"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6fEMweMyytS","reviewdata":1,"reviewCorrectColor":"0x275114","reviewIncorrectColor":"0x8F0000","shapemaskId":"","xPos":324,"yPos":4,"tabIndex":4,"tabEnabled":true,"referenceName":"6q9nMO7wVao","xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6q9nMO7wVao_489819402","type":"acctext","altText":"Provides a percentage of text that is likely created through artificial intelligence.","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Provides a percentage of text that is likely created through artificial intelligence.","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.562}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":85,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":284,"bottom":44,"pngfb":false,"pr":{"l":"Lib","i":699}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6q9nMO7wVao"}],"shuffle":true,"depth":2,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":true,"useHandCursor":true,"id":""},{"kind":"droparea","style":"matching","reviewdata":3,"reviewCorrectColor":"0x275114","reviewIncorrectColor":"0x8F0000","shapemaskId":"","xPos":16,"yPos":132,"tabIndex":9,"tabEnabled":true,"referenceName":"6HeS1GkNrQk","xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6HeS1GkNrQk_783263573","type":"acctext","altText":"TurnItIn","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"TurnItIn","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.562}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":8,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":70,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":700}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6HeS1GkNrQk"},{"kind":"droparea","style":"matching","reviewdata":2,"reviewCorrectColor":"0x275114","reviewIncorrectColor":"0x8F0000","shapemaskId":"","xPos":16,"yPos":68,"tabIndex":6,"tabEnabled":true,"referenceName":"5qQ2Ke7CviK","xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5qQ2Ke7CviK_-280812656","type":"acctext","altText":"Similarity Report","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Similarity Report","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.562}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":17,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":134,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":701}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"5qQ2Ke7CviK"},{"kind":"droparea","style":"matching","reviewdata":1,"reviewCorrectColor":"0x275114","reviewIncorrectColor":"0x8F0000","shapemaskId":"","xPos":16,"yPos":4,"tabIndex":3,"tabEnabled":true,"referenceName":"6kJZzbQZUK7","xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6kJZzbQZUK7_1149136277","type":"acctext","altText":"AI Report","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"AI Report","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.562}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":9,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":80,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":702}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6kJZzbQZUK7"}],"shapemaskId":"","xPos":36,"yPos":184,"tabIndex":1,"tabEnabled":false,"referenceName":"6BZ2f00kFpE","xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":132,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":648,"height":264,"strokewidth":0}},"width":648,"height":264,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":648,"bottom":264,"altText":"Matching Drag and Drop","pngfb":false,"pr":{"l":"Lib","i":694}}},"id":"6BZ2f00kFpE"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5nDH5oeZyWM_-2004705116","id":"01","linkId":"txt__default_5nDH5oeZyWM","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":648,"height":68,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"DIRECTIONS","style":{"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#000000","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.465}},{"text":":","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#000000","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.201}},{"text":" Match the term to the definition. Drag and drop the term to the corresponding definition.","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#000000","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.201}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"left","lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#000000"},"tagType":"P"},"runs":[{"idx":0,"len":101,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":665,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":704}}}],"shapemaskId":"","xPos":26,"yPos":68,"tabIndex":0,"tabEnabled":true,"referenceName":"5nDH5oeZyWM","xOffset":0,"yOffset":0,"rotateXPos":334,"rotateYPos":39,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":668,"bottom":78,"altText":"DIRECTIONS: Match the term to the definition. Drag and drop the term to the corresponding definition.","pngfb":false,"pr":{"l":"Lib","i":703}},"html5data":{"xPos":0,"yPos":0,"width":668,"height":78,"strokewidth":0}},"width":668,"height":78,"resume":true,"useHandCursor":true,"id":"5nDH5oeZyWM"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6BZ2f00kFpE_CorrectReview","id":"01","linkId":"6BZ2f00kFpE_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":401,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":678}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":677}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6BZ2f00kFpE_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6BZ2f00kFpE_IncorrectReview","id":"01","linkId":"6BZ2f00kFpE_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":409,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":680}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":679}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6BZ2f00kFpE_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');