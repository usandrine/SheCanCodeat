const countRoles = (users) => {
    return users.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});
  };
  
  const findAdmins = (users) => {
    const admins = users.filter(user => user.role === 'admin').map(user => user.name);
    return admins.length ? admins : "No admins found";
  };
  
  const generateWelcomeMessages = (users) => {
    return users.map(user => `Welcome, ${user.name}! You are an ${user.role}.`);
  };
  
  console.log(countRoles([{ name: 'Alice', role: 'admin' }, { name: 'Bob', role: 'student' }]));
  console.log(findAdmins([{ name: 'Alice', role: 'admin' }, { name: 'Bob', role: 'student' }]));
  console.log(generateWelcomeMessages([{ name: 'Alice', role: 'admin' }]));

  /*THE ADVANTAGES OF USING ARRAY METHODS (filter, map)
     These array loops are fast and ease work, that is to say coding with them is easy and it saves time and space. */
  