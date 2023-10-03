# Hutsy Connect Project Submission
Deployed at: [https://isaiahl88.github.io/hutsy-project-isaiah/]

## Finished Pages: 
- Login
- Sign Up
- Event List
- Create Event

## Done
- Login / signup connected to API
- Login / signup validation
- Events Page and necessary components (Events, Event, Profile Slider)
 - (Only using hardcoded events because API is not working)
- Responsive event buttons (Join / Leave / Edit)
- Responsive layout for EventsPage (using view buttons)\
  - I did this by storing a flag to represent what view is toggled
- Tabs for different event querys on Event Page
  - Current tab also stored using state variable in EventsPage  
  - Responsive css and state variable are finished but it is not actually functionall (API not working)
- CSS for all listed finished pages is complete


## Un-Finished Pages:
- Event Detail
- My Profile

## Tasks Todo
- Profile Page
  - Must build a component to act as the Profile page
  - You should either create a new component that can hold all elements that the user owns or is attending or just modify the Events component
    to take some prop that will decide whether all events are loaded or only some specific to a user. You can query all existing events using the API (API is not working as of now, so
    you can just copy the hardcoded list of events in the Events component) and find all events where the attendee's attribute contains
    the user's id (stored in session storage) or where the created by attribute matches the user's id.
  - You can reuse the Profile Slider inside this component. 
  - I recommend you take a look at how I did the view toggle buttons in events page as you can copy over the svgs and click handle functions for this page.
  - For the center page you will need the user's email which i did not store, change the login to also store email in sessionStorage.
  - For the center page icon, you can reuse the Profile Icon generator API i used in the Profile Slider component.
- Detail Page
  - Possible add either a button to each event on the Event Page or turn the "event-box" into a button that leads to the
    event detail page.
  - You could reuse the Event component if you find a way to change the css sizing for this page (possible with a conditional class?)
  - For the attendees tab you could change the hardcoded events I have to actually store a name as well as an id or you
    can wait until the API is working and extract the names from the attendees attribute (I'm assuming all attending users
    info will be stored there)
  - You need to replace the event area of this page with inputs so the user can edit if they own the event, this can be done
    by passing along the attending/ownership status after the click on EventsPage. Also, you will need to find a way to pass the       event selected as well.
  - Add a back to events button
  - Add a completed button for Edits
  - I'm not sure what the add button is meant for in the Figma design for the regular detail page
- Events (AFTER API IS WORKING)
  - Once the API is working again, the code i have commented out in the fetchEvents method should work to get all the events, if it is working you need to replace the eventsTest state array with the list events found from the api (it should be placed in a state variable so the ui re-renders when changes are made).
  - You must change the Join/Leave callback to also update the API when someone leaves or joins an event
  - Must also make use of the (All Events / Furure Events / Past Events) tab when querying the API, the current tab is stored
    as a state variable in the EventsPage Component 






