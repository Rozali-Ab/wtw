import { FormEvent, Fragment } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch } from '../../hooks';
import { AppRoute, PageTitles } from '../../const';
import { AuthData } from '../../types/userData';
import { localStorageUtil } from '../../utils/localStorageUtils/localStorageUtils';
import { logIn } from '../../store/userSlice/userSlice';
import { setFavorites, setHistory } from '../../store/filmSlice/filmSlice';


export function SignInPage () {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form) as Iterable<[AuthData]>;
    const data = Object.fromEntries(formData);
    const userInfo = localStorageUtil.getItem(data.email);

    if (userInfo) {
      if (userInfo.email === data.email) {
        if (userInfo.password === data.password) {
          dispatch(logIn(userInfo));
          dispatch(setFavorites(userInfo?.favorites));
          dispatch(setHistory(userInfo?.history));
          navigate(AppRoute.Root);
          toast.success('Successfully');
        } else toast.warn('Wrong password');
      } else toast.error('Wrong email');
    } else {
      toast.error('User not found');
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.Login}</title>
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
                <input 
                  className="sign-in__input" 
                  type="email" 
                  placeholder="Email address" 
                  name="email" 
                  id="email" 
                />
                <label className="sign-in__label visually-hidden" htmlFor="email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input 
                  className="sign-in__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                  id="password" 
                />
                <label className="sign-in__label visually-hidden" htmlFor="password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
          <Link to={AppRoute.SignUp} className="small-film-card__link"> 
            Have no an account?
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
