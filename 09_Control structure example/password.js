let currentPassword = "123456";

function updatePassword(oldPasswordInput, newPasswordInput) {
    let oldPassword = String(oldPasswordInput);
    let newPassword = String(newPasswordInput);

    if (oldPassword.length < 6) {
        console.log("Old password must be at least 6 characters long");
    }
    else if (oldPassword !== currentPassword) {
        console.log("Old password does not match current password");
    }
    else if (newPassword.length < 6) {
        console.log("New password must be at least 6 characters long");
    }
    else if (newPassword === currentPassword) {
        console.log("New password can not be the same as the old password");
    }
    else {
        currentPassword = newPassword;
        console.log("Password updated successfully!");
    }
}

updatePassword("123456", "987654");  
