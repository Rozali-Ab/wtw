## [**WHAT TO WATCH**](https://wtw-ten.vercel.app/)

### Онлайн кинотеатр с самыми интересными фильмами и сериалами

`*Давно хотел посмотреть какой-то фильм? У нас он есть* :partying_face:

*Добавляй в избранное, чтобы не потерять!*`



## Реализованы Требования к функциональности.
```javascript
LocalStorage
```
 для хранения учетных записей пользователей, их Избранного и Истории поиска.
`
- [x] **React**

Функциональные компоненты

Разделение на умные и глупые компоненты 

[Рендеринг списков](https://github.com/Rozali-Ab/wtw/blob/main/src/components/FilmsList/FilmsList.tsx#L42);

[Реализована форма](https://github.com/Rozali-Ab/wtw/blob/main/src/pages/SignUpPage/SignUpPage.tsx);

[Применение предохранителя](https://github.com/Rozali-Ab/wtw/blob/main/src/components/App/App.tsx#L17);

~запамятовано про Контекст API~

[Кастомный хук](https://github.com/Rozali-Ab/wtw/blob/main/src/hooks/useDebounce.ts#L3);

[PropTypes](https://github.com/Rozali-Ab/wtw/blob/main/src/components/FilmsList/FilmsList.tsx#L59)
https://github.com/Rozali-Ab/wtw/blob/main/src/components/FilmsList/SmallFilmCard.tsx#L61

[Debounce поискового запроса](https://github.com/Rozali-Ab/wtw/blob/main/src/pages/SearchPage/SearchPage.tsx#L23);

[lazy](https://github.com/Rozali-Ab/wtw/blob/main/src/routing/lazy-routes.tsx)
[+ Suspense](https://github.com/Rozali-Ab/wtw/blob/main/src/routing/router.tsx#L24);
`


- [x] [**Modern Redux with Redux Toolkit**](https://github.com/Rozali-Ab/wtw/blob/main/src/store/root-reducer.ts)
- [x] [**userSlice, filmSlice**](https://github.com/Rozali-Ab/wtw/tree/main/src/store/filmSlice)
- [x] [**Custom Middleware**](https://github.com/Rozali-Ab/wtw/blob/main/src/store/middlewares/localStorageListener.ts)
- [x] [**RTK Query**](https://github.com/Rozali-Ab/wtw/blob/main/src/api/api.ts)
- [x] [**Transforming Responses**](https://github.com/Rozali-Ab/wtw/blob/main/src/api/tranformResponse.ts)

- [x] **TypeScript**
- [x] [**CI/CD**](https://github.com/Rozali-Ab/wtw/actions)
[React-toastify](https://github.com/Rozali-Ab/wtw/blob/main/src/pages/SignInPage/SignInPage.tsx#L35)