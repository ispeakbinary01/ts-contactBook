interface IContact {
    firstName: string;
    lastName: string;
    country: string;
    email: string;
  }

  type ContactState = {
      contacts: IContact[]
  }

  type ContactAction = {
      type: string
      contact: IContact
  }

  type DispatchType = (args: ContactAction) => ContactAction