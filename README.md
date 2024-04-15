---

# Fyle Frontend Development Challenge

## Overview

This Angular 17 single-page application (SPA) is designed to fetch and display public GitHub repositories belonging to a user. It utilizes the GitHub API for fetching user information and repositories. Pagination is implemented on the server-side to improve performance, and Tailwind CSS is used for styling.

![GitHub Repositories Listing Page](<insert screenshot or gif of your application>)

## Features

- Search bar to input GitHub username and display repositories
- Zero state handling for non-existent users
- Pagination with server-side implementation
- Dropdown to select page size
- Skeleton loader during API calls
- Cached GET API calls to external APIs
- Unit tests for 1 component and 1 service with 100% code coverage

## Requirements

- Angular 17+
- Tailwind CSS
- GitHub API (REST)

## Getting Started

1. Clone the repository:

   ```
   git clone <your_repo_url>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the application:

   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Usage

- Enter a valid GitHub username in the search bar and click the search button.
- View the repositories listed with topics.
- Navigate through pages using the pagination controls.
- Adjust the page size using the dropdown.

## Testing

To run unit tests, use the following command:

```
ng test
```

## Deployment

The application is deployed to <insert deployment platform>. Access it [here](<https://fyle-internship-challenge-23-lilac.vercel.app/>).

## Video Introduction

[Link to video introduction](<insert Google Drive link>)



---

## Thoughts on the Assignment

1. **Introduction**: My name is Harsh Khavale. I am currently pursuing Masters in Computer Applications, and my hobbies include exploring new technologies and contributing to open-source projects. Yes, I will be available for a full-time internship for 6 months.

2. **Most Challenging Part**: The most challenging part of the assignment was implementing the server-side pagination while ensuring efficient performance. It required careful consideration of how to manage API calls and update the UI dynamically without compromising user experience.

3. **Changes to the Assignment**: If I were to change anything about the assignment, I would introduce a more comprehensive error handling mechanism to gracefully handle situations such as API rate limits, network failures, or unexpected responses. Additionally, providing clearer documentation or examples for certain requirements, such as unit testing, would have been helpful to ensure consistency across submissions and streamline the evaluation process.

---

## Contact

For any questions or inquiries, please contact harshkhavale1102@gmail.com.

---
