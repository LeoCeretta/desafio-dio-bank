import { PremiumAccount } from './class/PremiumAccount';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'


//Testando people account
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.deposit(110)
peopleAccount.withdraw(200)
peopleAccount.withdraw(50)
console.log(peopleAccount)

//Testando company account
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(11)
companyAccount.deposit(100)
companyAccount.withdraw(200)
companyAccount.withdraw(50)
console.log(companyAccount)

//Testando premium account
const premiumAccount: PremiumAccount = new PremiumAccount('LEO', 18)
premiumAccount.depositPlus(20)
premiumAccount.depositPlus(80)
premiumAccount.withdraw(200)
premiumAccount.withdraw(50)
console.log(premiumAccount)
