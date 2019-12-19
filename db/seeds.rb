i = 0
15.times do 
	u = User.create(
		username: Faker::Games::LeagueOfLegends.champion + "#{rand(10)}",
		email: "test#{i}@test.com",
		password: "password",
		password_confirmation: "password"
	)
	puts "#{u.username} created!";
	i+=1
end

puts "Data seeded."