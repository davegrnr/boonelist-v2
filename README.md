# BooneList

## Logged Out/In Homepage
![image](https://user-images.githubusercontent.com/62620504/148597385-bf934f6a-862a-41f3-be25-d99aca44ffca.png)
![image](https://user-images.githubusercontent.com/62620504/148597520-f8160d2c-90ec-4d16-aedf-4d4f62423fe0.png)


## Sign Up
![image](https://user-images.githubusercontent.com/62620504/148597440-c2fd3a7d-65fe-47db-9e11-1b110fb4a8f4.png)

## Component List
### "Owned" Components Have Remove Button
![image](https://user-images.githubusercontent.com/62620504/148597712-1aee4fd9-8f70-479c-b010-f2b7a056341f.png)

## Component Detail
### "Owned" Comments Have Remove Button
![image](https://user-images.githubusercontent.com/62620504/148597932-6a888bbf-508a-41a6-85b9-88774c9e86aa.png)

## Change Profile Form
![image](https://user-images.githubusercontent.com/62620504/148597977-525a6ac6-fea5-41f7-aaf5-d986b3cb9550.png)


## Initialization
 - boonelist-client/ 
    - "npm install"
 - boonelist-server/ 
   - "npm install"
   - "psql < boonelist.sql"
   - "npm start"

# Project Objective:
1. ### Actors Involved:  
 - User: Create a profile, make/remove new items posts, make/remove new services posts, edit profile, comment on other user posts, like other user posts.
 -  Admin: Same as user but able to remove other posts or comments

2. ### Auth Module:
 -  Login Page - log in with email/password JWT token using bcrypt
3. ###  Home page:  
 - Renders welcome message and shows nav with post routes for new items or services
 - Renders nav route to edit user profile
4. ### Services page:
 - This route and following endpoints accessible only to logged in users
 - Renders other user posts and provides access to more details through link
 - Access link to post a new service
5. ### Sales page:
 - This route and following endpoints accessible only to logged in users
 - Renders other user posts and provides access to more details through link
 - Access link to post a new item for sale
6. ### Service/sale detail page:
 - Renders more information about a service or sale(item)
 - Renders comments and likes from other users
 - Renders form to post new comment
7. ### Post new service/sale page:
 - Renders form to post a new sale or service
8. ### User Profile Page:
 -  Current user can edit their information

# Technical details
1. ### Frontend:  
 - React.js

2. ### Backend:
 -  Node
 
3. ###  Database:  
 - PostgreSQL
 
4. ###  Hosting:  
 -  Heroku
