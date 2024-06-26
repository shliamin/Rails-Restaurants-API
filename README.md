
# Rails-Restaurants-API

### Efim Shliamin

## Project Description

Rails-Restaurants-API is a web application built with Ruby on Rails that allows users to view and manage restaurants. The application includes user authentication features, an API for working with restaurants, and support for file uploads and email handling.

## Installation

Follow these steps to install and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/shliamin/Rails-Restaurants-API.git
```

### 2. Navigate to the project directory

```bash
cd Rails-Restaurants-API
```

### 3. Install dependencies

Make sure you have Ruby and Bundler installed. Then run:

```bash
bundle install
```

### 4. Set up the database

Create and set up the database:

```bash
rails db:create
rails db:migrate
rails db:seed
```

### 5. Start the server

Start the Rails server:

```bash
rails server
```

## Usage

### Authentication

#### User Authentication Overview 
In this Rails application, user authentication is managed by Devise, a flexible authentication solution for Rails applications. Devise handles the registration, login, logout, and password management for users. It provides a set of ready-made controllers, views, and routes to simplify the authentication process.

#### How Devise Works 
Devise provides a full-stack authentication solution based on Warden, a Rack-based authentication framework. It offers a range of features, including:

- User registration
- User login
- Password recovery
- Account management
- Session management
- Email confirmation

#### What is Warden?
Warden is a flexible authentication solution for Ruby applications. It provides a simple way to handle various authentication strategies and is designed to be integrated into Rack-based applications. Warden is often used in conjunction with libraries like Devise to provide a complete authentication system.

#### How Warden Works
Warden works by intercepting requests and checking if the user is authenticated based on predefined strategies. Here's a high-level overview of how Warden operates:

1. Middleware Integration: Warden is integrated as Rack middleware. This means it sits between the application and the web server, processing incoming requests and outgoing responses.
2. Strategies: Warden uses strategies to authenticate users. A strategy is a piece of code that checks if a user is authenticated based on certain criteria (e.g., checking a session or an API token).
3. Sessions: Warden manages user sessions, storing information about authenticated users and their session state.
4. Hooks: Warden allows hooks to be defined at various points in the authentication lifecycle (e.g., after authentication, before logout).

#### Key Concepts in Warden

1. Strategies: A strategy in Warden is a method of authenticating a user. Each strategy can define how to handle authentication, what conditions need to be met, and how to store user data. Strategies are configurable and can be customized as needed.

2. Scopes: Warden supports multiple authentication scopes. A scope represents a particular context of authentication. For example, an application might have different scopes for users, admins, and API clients.

3. Handlers: Warden handlers process the request and response to check if the user is authenticated. If the user is not authenticated, the handler can redirect them to a login page or return an error.

4. Sessions: Warden stores session data using the Rack session mechanism. This allows it to persist information about the authenticated user across multiple requests.

### API for Restaurants

The application provides an API for working with restaurants. Available routes:

- `GET /api/v1/restaurants` - get a list of all restaurants

### Home Page

The home page displays a list of all restaurants centered on the page.

## Project Structure

- `app/controllers` - application controllers
- `app/models` - application models
- `app/views` - application views
- `config/routes.rb` - routing file
- `db/migrate` - database migrations

## Authors

- Efim Shliamin

