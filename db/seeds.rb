user = User.first || User.create(email: 'example@mail.com', password: '123456')

Restaurant.create(name: "Restaurant One", address: "123 Main Street", user: user)
Restaurant.create(name: "Restaurant Two", address: "456 Elm Street", user: user)
Restaurant.create(name: "Restaurant Three", address: "789 Oak Street", user: user)


