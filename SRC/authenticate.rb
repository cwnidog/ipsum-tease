class Authenticate

  def isValid (username, password)
    fakeArray = IO.readLines("fake.txt")
    return (fakeArray[0] == username && fakeArray[1] == password)
  end

end


class shoppingcart

  def toWrite (somestring)
    File.open("fake.txt", "w") do |writelines|
      writelines.puts "#{somestring}"
    end
  end

  def isAlreadyThere? (somestring)
    checkArray = IO.readLines("fake.txt")
    checkArray.each do |line|
      if line == somestring
        return true
      end
    end

    return false
  end

  def whatsInTheCart ()
    checkCartArray = IO.readLines("fake.txt")
    for line in 2..checkCartArray.length

      #some html stuff goes here
    end

end

