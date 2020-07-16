const fetchFilterEndpoint = "http://68.183.105.196:8080/api/fetchFilter?access_token="

const userDataFilter = {
    AUCTION: {
        'Name': null,
        'Auction / Inspection Type': [],
        'Auction Color': [],
        'Time Remaining': null,
        'Distance': null,
        'States (EXCLUDE)': []
    },
    VEHICLE: {
        'Body Type': [],
        'Drivetrain': [],
        'Transmission': [],
        'Fuel Type': [],
        'Make': [],
        'Reserve Met': [],
        'Model': [],
        'Years': null,
        'Miles / Odometer': null,
        'Max Bid': null,
        'Profit (Minimum)': null
    },
    CONDITION: {
        'ACV Carfax Announcements': [],
        'Driveability Issues': [],
        'Exterior Damage': [],
        'Interior Damage': [],
        'Frame & Unibody Issues': [],
        'Mechanical Issues': [],
        'Warning Lights Issues': [],
        'OBDII Issues': [],
        'Seller Notes': [],
        'Title Issues': [],
        'Wheels & Tires Issues': [],
        'INCLUDE': []
    },
    NOTIFICATION: {
        istrue: null
    }
}
const afterFetchingFilter = (resData) => {
    // console.log(resData);

    if (resData.success) {
        var filterData = resData.filtersResponse
        const keys = Object.keys(filterData)
        const values = Object.values(filterData)
        const numberOfItems = keys.length
        keys.forEach((key, index) => {
            const valueKey = values[index]
                // console.log(key, valueKey);

            if (key === "filterName") {
                userDataFilter.AUCTION['Name'] = valueKey
            }
            if (key === "inspectionTypes") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.AUCTION['Auction / Inspection Type'] = []
                    return
                }
                userDataFilter.AUCTION['Auction / Inspection Type'] = valueKey
                return
            }
            if (key === "color") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.AUCTION['Auction Color'] = []
                    return
                }
                userDataFilter.AUCTION['Auction Color'] = valueKey
                return
            }
            if (key === "timeRemainingMax") {
                userDataFilter.AUCTION['Time Remaining'] = valueKey
                return
            }
            if (key === "maxDistance") {
                userDataFilter.AUCTION['Distance'] = valueKey
                return
            }
            if (key === "state") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.AUCTION['States (EXCLUDE)'] = []
                    return
                }
                userDataFilter.AUCTION['States (EXCLUDE)'] = valueKey
                return
            }
            if (key === "bodyTypes") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.VEHICLE['Body Type'] = []
                    return
                }
                userDataFilter.VEHICLE['Body Type'] = valueKey
                return
            }
            if (key === "drivetrains") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.VEHICLE['Drivetrain'] = []
                    return
                }
                userDataFilter.VEHICLE['Drivetrain'] = valueKey
                return
            }
            if (key === "transmissions") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.VEHICLE['Transmission'] = []
                    return
                }
                userDataFilter.VEHICLE['Transmission'] = valueKey
                return
            }
            if (key === "fuelTypes") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.VEHICLE['Fuel Type'] = []
                    return
                }
                userDataFilter.VEHICLE['Fuel Type'] = valueKey
                return
            }
            if (key === "reserveMet") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.VEHICLE['Reserve Met'] = []
                    return
                }
                userDataFilter.VEHICLE['Reserve Met'] = valueKey
                return
            }
            if (key === "makes") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.VEHICLE['Make'] = []
                    return
                }
                userDataFilter.VEHICLE['Make'] = valueKey
                return
            }
            if (key === "models") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.VEHICLE['Model'] = []
                    return
                }
                userDataFilter.VEHICLE['Model'] = valueKey
                return
            }
            if (key === "yearMin") { //have to fix
                userDataFilter.VEHICLE['Years'] = valueKey.toString()
                return
            }
            if (key === "yearMax") { //have to fix
                userDataFilter.VEHICLE['Years'] = valueKey.toString()
                return
            }
            if (key === "milesMin") {
                userDataFilter.VEHICLE['Miles / Odometer'] = valueKey
                return
            }
            if (key === "milesMax") {
                userDataFilter.VEHICLE['Miles / Odometer'] = valueKey
                return
            }
            if (key === "currentBidMax") {
                userDataFilter.VEHICLE['Max Bid'] = valueKey
                return
            }
            if (key === "profitMin") {
                userDataFilter.VEHICLE['Profit (Minimum)'] = valueKey
                return
            }
            if (key === "includeNADifference") {
                console.log('fix this');
                return
            }
            if (key === "excludeFilters") {
                const k = Object.keys(valueKey)
                const v = Object.values(valueKey)
                k.forEach((key, index) => {
                    // console.log(key, v[index]);
                    const data = v[index]
                    if (key === "acvCarFaxAnnouncements") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['ACV Carfax Announcements'] = []
                            return
                        }
                        userDataFilter.CONDITION['ACV Carfax Announcements'] = data
                        return
                    }
                    if (key === "driveabilityIssues") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Driveability Issues'] = []
                            return
                        }
                        userDataFilter.CONDITION['Driveability Issues'] = data
                        return
                    }
                    if (key === "exteriorIssues") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Exterior Damage'] = []
                            return
                        }
                        userDataFilter.CONDITION['Exterior Damage'] = data
                        return
                    }
                    if (key === "interiorIssues") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Interior Damage'] = []
                            return
                        }
                        userDataFilter.CONDITION['Interior Damage'] = data
                        return
                    }
                    if (key === "frameUnibodyIssues") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Frame & Unibody Issues'] = []
                            return
                        }
                        userDataFilter.CONDITION['Frame & Unibody Issues'] = data
                        return
                    }
                    if (key === "mechanicalIssues") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Mechanical Issues'] = []
                            return
                        }
                        userDataFilter.CONDITION['Mechanical Issues'] = data
                        return
                    }
                    if (key === "warningLightsIssues") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Warning Lights Issues'] = []
                            return
                        }
                        userDataFilter.CONDITION['Warning Lights Issues'] = data
                        return
                    }
                    if (key === "obdiiCodes") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['OBDII Issues'] = []
                            return
                        }
                        userDataFilter.CONDITION['OBDII Issues'] = data
                        return
                    }
                    if (key === "sellerNotes") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Seller Notes'] = []
                            return
                        }
                        userDataFilter.CONDITION['Seller Notes'] = data
                        return
                    }
                    if (key === "titleHistoryNotes") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Title Issues'] = []
                            return
                        }
                        userDataFilter.CONDITION['Title Issues'] = data
                        return
                    }
                    if (key === "wheelsTiresIssues") {
                        if (valueKey.length == 1 && valueKey[0] === "") {
                            userDataFilter.CONDITION['Wheels & Tires Issues'] = []
                            return
                        }
                        userDataFilter.CONDITION['Wheels & Tires Issues'] = data
                        return
                    }
                })
            }
            if (key === "includeOptions") {
                if (valueKey.length == 1 && valueKey[0] === "") {
                    userDataFilter.CONDITION['INCLUDE'] = []
                    return
                }
                userDataFilter.CONDITION['INCLUDE'] = valueKey
                return
            }
            if (key === "receiveNotification") {
                if (valueKey) {
                    userDataFilter.NOTIFICATION.istrue = "Yes"
                } else {
                    userDataFilter.NOTIFICATION.istrue = "No"

                }
                return
            }
        })
    }
}



userData = userDataFilter

const getCookieFilterHandler = (key) => {
    const tokenFromStorage = localStorage.getItem('access_token')
    var name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return tokenFromStorage;
}

const createReqFE = async(url, data) => {
    // console.log(data);
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: data
    })
    const res_data = await res.json()
        // console.log(res_data);
    afterFetchingFilter(res_data)
}

//This part is hard. Not able to understand properly. First Understand..

const fetchFilterDataById = () => {
    let url = window.location.href
    const fData = url.split('?')[1]
    const token = getCookieFilterHandler('access_token')
    createReqFE(fetchFilterEndpoint + token, fData)

}