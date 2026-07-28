# Inkwell — Blog Management App

A one-day React + Redux Toolkit project. Full CRUD on blog posts (title,
description, category, date), plus search and filtering — all backed by a
single Redux slice.

## Getting started

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

> Built with Create React App conventions. If you'd rather use Vite, copy
> `src/` into a fresh `npm create vite@latest -- --template react` project
> and drop `index.css`'s Google Fonts `<link>` into `index.html`.

## Folder structure

```
src/
  redux/
    store.js          # configureStore()
    blogSlice.js       # createSlice: reducers, actions, selectors
  components/
    BlogForm.jsx        # Add/Edit form (modal)
    BlogCard.jsx         # Single blog display + edit/delete
    BlogList.jsx          # Reads filtered blogs from the store
    SearchFilter.jsx       # Search box + category/date filters
    Modal.jsx                # Reusable modal shell
  pages/
    Home.jsx           # Composes everything above
  data/
    sampleBlogs.js       # Seed data so the app isn't empty on load
  App.jsx
  index.js
  index.css
```

## How the state flows

1. **`blogSlice.js`** owns all blog data plus the current search term,
   category filter, and date filter in one slice, so there's a single
   source of truth.
2. Components never touch the array directly — they dispatch actions
   (`addBlog`, `updateBlog`, `deleteBlog`, `setSearchTerm`, ...) and read
   data back out through selectors (`selectVisibleBlogs`,
   `selectCategories`).
3. `selectVisibleBlogs` is where search + category + date filtering
   actually happens, memoizable later with `createSelector` if the app
   grows.

## Features implemented

- **Add Blog** — modal form with title, description, category, date;
  inline validation on required fields.
- **View Blogs** — responsive card grid, newest first.
- **Edit Blog** — same modal form, pre-filled, dispatches `updateBlog`.
- **Delete Blog** — confirmation prompt before removing.
- **Search** — live filter by title as you type.
- **Filter** — by category (dropdown, generated from existing blogs) and
  by exact date.
- **Redux Toolkit** — `createSlice`, `configureStore`,
  `useSelector`/`useDispatch` throughout, no other state library.

## Suggested extensions (if time remains)

- Persist `state.blogs` to `localStorage` with a small middleware or
  `useEffect` + `store.subscribe`.
- Swap the exact-date filter for a date range.
- Add a `status` field (`draft` / `published`) and filter by it too.
- Move validation into the slice as a `formErrors` reducer if you want
  Redux to own even that.
