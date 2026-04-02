# SRP Refactor Notes

## Problem

- Single class handled both library management and book search logic
- Multiple reasons to change in one class

## Solution

- Split into three classes each with one responsibility
- `Book` - data model only
- `Library` - collection management: add, remove, list, count
- `BookSearch` - query logic: search by title, author, publication year

## Files

- `book.ts` - Book data model
- `library.ts` - manages book collection
- `bookSearch.ts` - handles search queries
- `sample.ts` - barrel export

## Result

- Each class has one reason to change
- Search logic change does not affect Library and vice versa
