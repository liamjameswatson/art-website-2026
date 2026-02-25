//Helper functioins

// Format number to enure it has two decimal places

export function formatNumberWithDecimal(num: number): string {
    const [int, decimal] = num.toString().split(".");

    return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;

  
}

