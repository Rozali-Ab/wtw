import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

import { useAppDispatch} from '../../hooks';
import { AppRoute, PageTitles } from '../../const';

import { logIn } from '../../store/user-process/user-process';
import { setFavorites, setHistory } from '../../store/film-process/film-process';
import { validateEmail, validatePassword } from '../../utils/utils';

function SignUpPage () {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(email)) {
      if (validatePassword(password)) {
        navigate(AppRoute.Root);
        const user = {
          email,
          password,
          favorites: [],
          history: [],
        };
        dispatch(logIn(user));
        dispatch(setFavorites(user.favorites));
        dispatch(setHistory(user.history));
        toast.success('Successfully');
      } else toast.warn('Password must be at least 6 characters long');
    } else toast.warn('Invalid email format');

  };

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
                <input 
                  className="sign-in__input" 
                  type="email" 
                  placeholder="Email address" 
                  name="email" 
                  id="email" 
                  onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
                />
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

export default SignUpPage;