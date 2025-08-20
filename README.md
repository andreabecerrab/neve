# Project README

## 🧸 Tech stack
- angular
- scss
- ts

## 🎨 Styling
Styles applied in the following structure
- General
```
font.scss  - font declared
mixins.scss  - mixins for reusable styling
reset.scss  - reset for defult html look and feel
tokens.scss - main tokens for spacing, font etc.
```
- Inside app.component.scss
  Divided in Sections
```
Header
Hero
Welcome
Gallery
CrossLinks
News
Footer
```
- Components - 
  Inside each component to encapculate its styling.
- Styling for web and mobile
  
## 🖼️ UI
Created components for reusable usage. For example, (neve-button, neve-crosslink, neve-header etc.) inside components folder.
Each component has its own .ts file and .scss file to encapculate behaviour and styling.

## 🌀 Accesibility
Implemented dynamic styling for focus, hover, and other interactive states to enhance user feedback.
Tested keyboard navigation through the site.

## 🎢 Data
Embedded JSON data is used within the app and retrieved via payload.service.ts. The service simulates an API call to mimic fetching data from an endpoint. 
Interfaces are defined for each component section, and all models can be found in models/model.ts.
🔮Future: fetch from an exisint backend. For this 2 proposals.
  1. Fetch a complete json for static content that doesn't change too much over time. Allow edition from a json-editor.
  2. Create independent endpoint calls for each section for example news, images. (example: linecheck/news)

## 🐝 Considerations
API can be structured with a consistency of ({ id, type, attributes }) for predictable data handling in each section.   
TypeScript interfaces and runtime checks ensure payload validity.  
Performance can be optimized with caching for images, fonts, main texts. Can use preload of fonts, also can add a theme-service that loads tokens to support multiple themes.  

## 🚀 Deploy
Use github action to deploy a static web app. (file: .github/workflows/deploy.yml)
