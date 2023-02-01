--Readme document for Randy Quilala rquilala@uci.edu 31589388--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

20/20
- 2/2 The ability to log overnight sleep
- 2/2 The ability to log sleepiness during the day
- 2/2 The ability to view these two categories of logged data
- 4/4 Either using a native device resource or backing up logged data
- 4/4 Following good principles of mobile design
- 4/4 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
	Somewhere between 9 and 12 hours? I'm not sure, I spent 2 hours figuring out how to make a bottom navigation bar.

3. What online resources did you consult when completing this assignment? (list specific URLs)
	- https://ionicframework.com/docs/components
		- documentation for alert, chip, FAB, modals, etc
		- https://ionic.io/ionicons for icons
		- https://capacitorjs.com/docs/apis for capacitor plugins (e.g. motion)
	- https://www.freakyjolly.com/ionic-add-tabs-navigation-routing-in-ionic-angular-application/
	- https://ionic.io/blog/5-examples-of-the-new-ionic-6-bottom-sheet-modal
	- https://medium.com/web-developer/create-a-stopwatch-ionic-3-angular-5-d45bc0358626
	- https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_arc
	- https://ionicframework.com/docs/developing/android#creating-an-android-virtual-device
		- https://developer.android.com/studio/run/device
	- https://stackoverflow.com/questions/37181170/how-to-make-the-contents-of-an-ion-item-fill-the-space-available
	- https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
	I completed this assignment individually and on my own, only having referenced the above URLs for debugging.


5. Is there anything special we need to know in order to run your code?
	- Additional installations (might already be covered using [npm install], but just in case):
		npm install @capacitor/core
		npm install @capacitor/motion
		npm install @capacitor/android
	- For my native resource portion, I request permission for DeviceMotionEvent, but I put it in a try/catch block because DeviceMotionEvent.requestPermission() is only used on iOS 13+ (https://caniuse.com/mdn-api_devicemotionevent_requestpermission)
	- The UI size (dpi) seems rather large if in the webpage from invoking [ionic lab]. The sizing seems a lot more reasonable when I deployed it on my phone, or if you zoom the webpage of the localhost window to **75% or below**. The Windows scrollbar, not present on a phone UI, also makes the UI more cramped.
	- I modified some of the given files (like SleepService and OvernightSleepData) and its methods in order to return more appropriate results. Doesn't change how to run it, but does require my version of the files to be run with it.
	- Oh and this is just for my reference, if you're seeing this then that means I forgot to remove it but these are the instructions I used in order to get the app on my actual phone:
		cd A4/sleeptracker
		ionic capacitor run android


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
	I designed the app for users who are consistent with (and avid in tracking) their sleep schedule. My design requires the user to explicitly start a sleep timer before they go to bed and end the sleep timer when they get out of bed, so that it becomes a routine for them.


7. Did you design your app specifically for iOS or Android, or both?
	Because Ionic is hybrid, it should work for both iOS and Android. I planned to deploy the app on my Android phone though, so I designed it primarily with Android in mind. 


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
	A person logs their sleep by starting the timer before they start sleeping and ending the timer when they wake up. I chose this method as opposed to logging start and end time because I figured that it would be easier to start and end a timer as opposed to having to remember and input the exact times one slept and woke up.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
	A person can log sleepiness in the designated tab using the slider in a modal. I chose this method because it provides a visual scale (slider), showing the levels of sleepiness from 1 to 7 (with the aid of the icons on each side of the slider).


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
	To view their overnight data, the user would navigate to the designated tab separate from the sleep timer; to view their sleepiness data, the data is available in the same tab where they can add a new sleepiness entry. I chose to separate the overnight data and the sleep timer in order not to clutter the sleep timer interface.


11. Which feature choose--using a native device resource, backing up logged data, or both?
	I chose the use of a native device resource.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
	I utilized the accelerometer in my phone. When the app detects that the phone is face down, the sleep timer will start. The sleep timer will end when the phone is picked up (is no longer face down).


13. If you backed up logged data, where does it back up to?
	I did not back up data.

14. How does your app implement or follow principles of good mobile design?
	I designed the app with mobile-first in mind, with a bottom navigation bar and starting the user on the Sleep Timer page (I think the user would find it useful to quickly be able to begin a sleep timer upon first opening the app). I implemented "uh-oh" protection, allowing users to delete recorded entries and using an alert to confirm that the user would like to remove the entry.
	