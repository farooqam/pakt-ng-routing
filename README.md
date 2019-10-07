# RoutingDev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Video 1 - Define Routes

1. Adding Bootstrap
2. Create Navbar component
3. Add Navbar html
4. Display Navbar

## Video 2 Configure Routes

1. Create Component Posts, and About
2. Add Routes for them
3. Import Router Module

## Video 3 - Activate Routes

1. Adding router-outlet
2. Refactor the traditional nav links with angular RouterLink

## Video 4 - Define Wildcard route and redirects

1. Add wildcard route page-not-found-component
2. Add wildcard route link in app module
3. Add redirect route to posts route with pathMath

---

## Module # 2 - Routing Module

### Video # 1 - What is Routing Module

1. What is Angular Routing Module
2. Characteristics of Angular Routing Module

- It is just a simple Angular module. If your applicaion grows and you need to implement complex routing feature like Resolvers, Guards, etc then we need to create a separate routing file
- Routing Module has these features:
- Separates routing logic from application business logic
- We can add or remove routing module when testing the application
- Does not declare components in the routing module

### Video # 2 - Integrating routing with our app

1. Create appRouting Module inside the app directory
2. Refactor or replace the appRoutes in AppRouting Module
3. Export AppRouting Module
4. Refactor duplicate code from AppModule

## Module 3 - Routing with Feature Module

### Video - 1 What is feature module?

- we can divided application into feature modules
- Do not put multiple business logic in a single app module
- The best practice is to break the application into multiple modules

### Video 2 - Creating Feature Module

1. Creating Feature Post Module and routing module
2. Creating post-list and post-detail component
3. Adding Routes for Post-list and post-detail

### Video 3 - Importing Feature module in AppModule

1. Remove duplicate routes from AppModule
2. Add PostModule in AppModule
3. Module Import does matter here

### Video 4 - ActivatedRoute in Action without Observable

1. Get Route parameter using snapshot paramMap
2. Created mock Posts
3. Create PostService and define getPosts
4. Create Post class
5. Fetched all posts
6. Render all posts

### Video 5 - Activated Route in Action with Observables

1. Define a new method to fetchPost by Id in PostService
2. Use route snapshot with observable and pipe
3. Add switchMap here
4. render post details in the component
5. Add back button

https://gist.github.com/HaiderMalik12/e68c0a7631dcfc24995a90fd672ac9c0

## Module - 4 Prefectching data using Route Resolvers

### Video 1 - What is Route Resolver

1. Explain Route Resolver
2. Create Route Resolver service
3. Implement Resolve method
4. get the Id and fetch the post on the based on id

### Video 3 - Adding Resolver to Route Configurations

1. Add resolve object in the route config
2. fetch the post from the route snapshot data in the details view
3. Update post in the detail template view
4. Fetch the post from the route using observable

### Video 2 - Error Handling using Route Resolver

1. Check make sure id is a number
2. Add new PostResolved type
3. If there is no id then we need to return post null and error message
4. Make sure send the observable in the response
5. If everything is good, use map to send the post results
6. Handle errrors using catchError
7. If error then send in the form of observable
8. Handle Error in the detail view

## Module - 5 Route Animating and Router Events

### Video - 1 What is Route Animations

- Intro to Routing Animations

### Video - 2 Animating Routes

1. Create Animations
2. Import Browser Animations Module
3. Import Animations in AppComponent
4. Activate animations in app template file

### Video - 3 Watching Router Events

1. Enable Debugging for RouterEvents
2. Copy todos module and add into app module
3. Update navbar and add httpClient module
4. Add Router Events
5. Add condition to test the delay

## Module - 8 Secondary or Auxilary Routes

### Video - 1 What are secondary routes

1. What is Secondary Routes
2. Why do we need Secondary Routes
3. How to use Secondary Routes

### Vieo - 2 Secondary Routes in Action

- Create Dashboard Module with Routing
- Create component
- Add route for Dashboard with outlet
- Add secondary outlet in AppComponent
- Add link in the navbar
- Create DisplayDashboard
- Create HideDashboard
- Import Dashboard Module
- Add check to displayDashboard
- Add check to hideDashboard
