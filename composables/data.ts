import signUpData from '@/data/entry/sign-up.json'
import loginData from '@/data/entry/login.json'
import navDrawerLinksData from '@/data/dashboard/nav-drawer-links.json'
import profileActionsData from '@/data/dashboard/profile-actions.json'
import banks from '@/data/banks.json'
import quickActions from '@/data/dashboard/quick-actions.json'
import bills from '@/data/bills.json'

const billsDue = bills.filter(({ daysLeft }) => daysLeft !== undefined)
const billsPaid = bills.filter(({ paidOn }) => !!paidOn)

export {
  signUpData,
  loginData,
  navDrawerLinksData,
  profileActionsData,
  banks,
  quickActions,
  billsDue,
  billsPaid,
}