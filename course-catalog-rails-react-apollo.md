In this challenge, you will create an application that utilizes these technologies to build an app that allows new college students to evaluate course offerings and professors. Using the user stories you will use your new UI-driven development skills to determine the graphql schema you will need to define to serve your features.

## Getting Started

```no-highlight
et get course-catalog-react-apollo
cd course-catalog-react-apollo
yarn install
rails db:create && rails db:migrate && rails db:seed
```

## User Stories

### Course Listing

```no-highlight
As a user navigating to the homepage
I want to see a list of course offerings
So that I can choose a course
```

#### Acceptance Criteria

- For each course, I should see the course name and the average rating

### Course Detail

```no-highlight
​As a prospective student
I want to see more course details
So that I can learn more about the course
```

#### Acceptance Criteria

- Course detail should be on a page separate to the listing
- This information should include the course description and a list of the course reviews with their ratings

### Show Contact Details

```no-highlight
As a user considering a course
I want to view professor information
So that I can get in contact with the instructor
```

#### Acceptance Criteria

- Clicking on the name of the professor toggles the contact details for the professor
- I should see the professor’s email and office location

### Hints

Before diving into the code, make sure to sketch out how the UI will look and determine what data you will need to display with your components. From here, you can figure out the types of queries you will want to make and begin sketching out the schema and Types you can build to accomplish this. The starting code includes the database pre-configured and seeded, it will be part of your challenge to add the necessary gems and node modules to accomplish your task such as graphql gem, react router, and Apollo.

Recall, to add graphql gem to your application, to your `Gemfile` add:

```ruby
...
gem 'graphql'
...
```

In your command line:

```no-highlight
bundle update
bundle exec rails generate graphql:install
bundle install
```

During development, use one tab of the terminal to have your rails server running, and in another, start webpack dev server. When making changes to your graphql endpoint, you may need to restart your rails server.

### Wrap Up

When your finished the app should function similarly to:

![Demo Image](http://g.recordit.co/1ZSfjbqzRF.gif)

Feel free to style it however you like! Importantly, if you open the console and click around your app, if you have provided Apollo Client the data it needs to construct the local cache tree, you’ll notice that when you click for more contact info on a professor you have already seen the contact info for on another course page, no new network requests are made! This is Apollo Client’s out of the box local caching in action, and makes for faster and smoother applications for your users.
