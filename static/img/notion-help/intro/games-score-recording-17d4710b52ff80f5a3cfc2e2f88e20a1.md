# Games Score Recording

The game score recording app on DailyPB allows players to log their game scores, track detailed statistics, and optionally upload their games to DUPR. It also includes a Box system for organizing players into segments, which is ideal for ladders, leagues, or other structured formats.

![chrome_2Fd2q3OlsW.gif](Games%20Score%20Recording/chrome_2Fd2q3OlsW.gif)

# Table of Contents

# How to Setup Game Score Recording

While there is no setup necessary to enable Game Score Recording, there are a few settings for hosts. To access the Game Score Recording feature, click on Game Recording button in the Attendees Popup.

# Accessing the Page for Players

Once someone is in the Game Score Recording page, they can simply copy and paste the URL of the page and send that link to anyone. 

![Example URL that can be shared by other players. ](Games%20Score%20Recording/image.png)

Example URL that can be shared by other players. 

# Game Score Recording Settings

Find the settings in page 4 of the Event Edit menu or inside the Games page after clicking “Settings.”

### DUPR Game Mode

Enable this option if you plan to submit scores to DUPR. Activating this mode enforces the following requirements:

1. Players must provide their DUPR ID when signing up for the session.
2. Games cannot end in a tie.
3. One team must score at least 6 points.

### **Require Box to Record a Game**

For sessions using Boxes, this setting ensures that anyone submitting a score must assign the game to a specific Box before completing the entry.

### **Allow players to create and edit Boxes**

Enabling this option allows players to manage the Boxes for the session. Whether to select this depends on your session's structure and level of control needed.

- **Example of When to Enable -** For casual or social play, where players can self-organize and adjust groups as needed, enabling this option promotes flexibility and autonomy.
- **Example of When Not to Enable -** For structured events like ladders or tournaments, where Boxes are predefined to maintain fairness and consistency, it’s better to leave this option unchecked to avoid confusion or unintended changes.

<aside>
⚠️

If you select “Require box to record a game” and don’t have “allow players to create and edit boxes” then no one will be able to record a Game until a Host creates at least one Box. When this happens, the 24 hour [Reminder](2%20&%2024%20Hr%20Reminders%2017c4710b52ff8098860bd2402894f811.md) email to Hosts will include this warning.

</aside>

# Setting up Boxes

Add, edit, and delete Boxes in the Settings popup in the Game page. 

<aside>
🚧

Remember hosts control who can manage Boxes: hosts-only or anyone.

</aside>

<aside>
💡

Boxes are displayed in alpha-numeric format, so “Box 10” will display before “Box 2.” To make numbers appear in order, use two-digit numbers (ex: “Box 02”).

</aside>

### Adding a Box

To add a Box, simply type in the name of the Box you want to add in the “Add New Box” field and click the “Add” button.

![chrome_vQoD1a54L4.gif](Games%20Score%20Recording/chrome_vQoD1a54L4.gif)

### Editing a Box

You can only edit a Box's name. To do this, click on the name of the Box and make your changes. Once you've edited the text, an 'Update' button will appear. If it doesn't show immediately, click outside the text Box to make it appear, then click the 'Update' button to save your changes

![chrome_5eGCTcEcmO.gif](Games%20Score%20Recording/chrome_5eGCTcEcmO.gif)

### Deleting a Box

Simply find the Box you wish to delete and click the “Delete” button to remove it. 

![chrome_cM1yuJ7iJi.gif](Games%20Score%20Recording/chrome_cM1yuJ7iJi.gif)

# **Interface**

## Top Buttons

At the top of the main page are three buttons

1. Settings - changing settings including Boxes
2. Create New Game - Adding a new game to the Session
3. Export to CSV - only Hosts have access to this. 

If you are uploading to DUPR, you will need to open the spreadsheet after the download into Google Sheets, delete the first row and resave. Then you can upload to the DUPR website.

## Full Session Results

This is where you can look at the results of all Games. Always refresh the screen to make sure these results are up-to-date.

### Sorting

Players will be sorted first by win-loss record and then Average differential if there is a tie.  You can easily see what is the primary and secondary sorting by the down arrows below the sorting method.

![Primary (Win-loss) and Secondary (Average Differential) sorting methods.](Games%20Score%20Recording/image%201.png)

Primary (Win-loss) and Secondary (Average Differential) sorting methods.

The default sorting can be changed by clicking on the Sort options, then selecting the Primary and Secondary sorting method. Sorting options include: Sum of Wins, Average Differential, Sum of Differential, and Sum of Points For. 

Note: his only affects your own screen and does not change the sorting method for anyone else.

![View of Secondary sort menu.](Games%20Score%20Recording/image%202.png)

View of Secondary sort menu.

<aside>
💡

Average Differential - points the Player scored minus the points scored on them, divided by the total number of Games they played. 

Sum of Differential - Total points Player scored minus total points scored on them

Sum of Points For - total points Player scored

</aside>

### Filtering (Boxes)

If you have enabled Boxes then you can filter the Full Session Results by Box. Simply click the Filter option and then select the Box you want to filter by in the dropdown menu.

In this menu you can also clear the current Filter and Filter for “No Box Entered”.

![image.png](Games%20Score%20Recording/image%203.png)

<aside>
🚧

If you don’t see any of the Boxes set up for the Session in the dropdown it means that no Game has been recorded within that Box. You can edit any Game, add the Box, then resave. 

</aside>

### Choosing a Player

If you click on any Player in the Results area, their name will be highlighted, the screen will move down to Individual Games section, and those Games will be filtered to show only the Games that Player was in. 

## Individual Games

The bottom area is where individual Games are listed.

Each Game displayed will list the: 

- Game number (in order of created date)
- full name of each player on each team with the wining team in bold and their scores below their names
- the Box (if applicable)
- Edit button (only logged in Attending Users have access to the Edit button)

![image.png](Games%20Score%20Recording/image%204.png)

 If a Game is deleted is will still show up but greyed-out. Deleted Games can be un-deleted.

### Filtering by Player

Enter the name of any Player to filter the list of Individual Games by that Player. To clear this Player, click the text “Clear" to the right of the input field.

![image.png](Games%20Score%20Recording/image%205.png)

# How to Create a New Game

1. Click on the “Create New Game” button.
2. Click on the two Players making up a team. Then click on the two Players making up the other team.  You will notice the slot highlighted for each Player.
    
    ![chrome_krfVuRCV2P.gif](Games%20Score%20Recording/chrome_krfVuRCV2P.gif)
    
3. Enter the score for the first team (blue background), then enter the score for the second team (orange background).
    
    ![chrome_BJoUN68Tgr.gif](Games%20Score%20Recording/chrome_BJoUN68Tgr.gif)
    
4. Optional, if you are using Boxes select the Box from the dropdown. 

![image.png](Games%20Score%20Recording/image%206.png)

1. Click the button “Save Game”

# How to Edit a Game

Click on the blue “Edit” button on the Game you want to Edit. Once clicked you will see the same interface as when you create a new game. 

- **To change a Player** - click on the Player’s name/image to select them. The other Players in the Session will appear and you can click on any other Player to swap them. If you realize you don’t want to change the Player, click one more time on the selected Player to de-select them.

Click “Save Game” to save changes.

![chrome_3bw4jv4gf7.gif](Games%20Score%20Recording/chrome_3bw4jv4gf7.gif)

- **To remove a Player** - click on the minus icon to the top-left of the Player you want to remove. Click “Save Game” to save changes.

![image.png](Games%20Score%20Recording/image%207.png)

- **To change a score** - click on the score and type in a new one. Click “Save Game” to save changes.
- **To add or change the Box** - click the Box dropdown and select the correct Box. Click “Save Game” to save changes.

# How to Delete a Game

To delete a Game, click “Edit” in the Individual Games area to load the Game. Then click the button “Delete Game” to delete it. 

Note the Game will still appear but will be greyed-out to signify it has been deleted. Deleted games can be edited and undeleted.

# How to Upload Games to DUPR

Only Hosts have access to the Export to DUPR button on the Game Scores Recording page. 

Clicking this button will download a spreadsheet (CSV format) to your device. However you will need to make one small change to the CSV file before uploading to the DUPR website. Here are the [instructions for DUPR Uploading.](DUPR%20Games%201894710b52ff80f4a192f448bcf47323.md)