process.stdin.on("data", data => {
  process.stdout.write(data.toString().trim().split("").slice(0).reverse().join("") + "\n\n\n")
})
