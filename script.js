document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault()
    const numInput  = document.querySelector('.numberInput')
    const num = parseInt(numInput.value)
    const resultMessage = document.querySelector('.resultMessage')
    
    function isFibonacciNumber(num) {
        if (num < 0) return false

        function fibonacci(n) {
            const fib = [0, 1]
            while (fib[fib.length - 1] < n) {
                fib.push(fib[fib.length - 1] + fib[fib.length - 2])
            }
            return fib
        }

        const fibSequence = fibonacci(num)
        return fibSequence.includes(num)
    }

    if (isFibonacciNumber(num)) {
        resultMessage.textContent = `${num} pertence à sequência de Fibonacci.`
        resultMessage.style.color = 'green'
    
        
    } else {
        resultMessage.textContent = `${num} não pertence à sequência de Fibonacci.`
        resultMessage.style.color = 'red'
    }

    numInput.value = ''
});
