import notesIcon from 'assets/icons/notes.svg'
import googleIcon from 'assets/icons/google.svg'
import githubIcon from 'assets/icons/github.svg'
import facebookIcon from 'assets/icons/facebook.svg'
import emailIcon from 'assets/icons/email.svg'

import type { ErrorKey, ProviderID } from 'types/login'
import type { MenuItem } from 'types/navigation'
import type { Category } from 'generated/graphql'

export const DEFAULT_CATEGORY: Pick<Category, 'color' | 'label' | 'primary'> = {
  color: '#5d7ef4',
  label: 'General',
  primary: true,
}

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: notesIcon,
    label: 'Notes',
    to: '/notes',
  },
]

export const LOGIN_ERRORS: Record<ErrorKey, string> = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
}

export const PROVIDERS_LOGOS: Record<ProviderID, any> = {
  google: googleIcon,
  github: githubIcon,
  facebook: facebookIcon,
  email: emailIcon,
}
