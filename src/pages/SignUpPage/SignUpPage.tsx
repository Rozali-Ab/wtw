import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Fragment } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser } from '../../store/action';
import { AppRoute, PageTitles } from '../../const';
import { AuthData } from '../../types/userData';
import { AuthStatus } from '../../const';

import type { FormEvent } from 'react';


function SignInPage () {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((store) => store.authorizationStatus);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form) as Iterable<[AuthData]>;
    const data = Object.fromEntries(formData);
    
    dispatch(loginUser(data));
  };

  if (authorizationStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Root}/>;
  }

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.SignUp}</title>
      </Helmet>
      <div className="user-page">
        <div className="sign-in user-page__content">
          <form 
            action="#"
            className="sign-in__form" 
            method="post" 
            onSubmit={handleFormSubmit}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="email" />
                <label className="sign-in__label visually-hidden" htmlFor="email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="password" id="password" />
                <label className="sign-in__label visually-hidden" htmlFor="password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign up</button>
            </div>
          </form>
          <Link to={AppRoute.Login} className="small-film-card__link"> 
            Already have an account?
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default SignInPage;