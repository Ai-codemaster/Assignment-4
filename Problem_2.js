function sendNotification(email) {
    const mail = email.split('@');
    const userName = mail[0];
    const domainName = mail[1];
    if (email.includes('@')) {
        return `${userName} sent you an email from ${domainName}`;
    }else{
        return 'Invalid Email'
    }
}

const mails = sendNotification('ashraful@yahoo.com');
console.log(mails);