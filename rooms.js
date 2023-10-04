const roomData = JSON.parse(localStorage.getItem('roomId'));
console.log(roomData);
const {result} = roomData.result;
console.log(result);

function handleHeader() {
    document.querySelector('#title').innerText = result.name;
    document.querySelector('#rating').innerText = result.rating;
    document.querySelector('#review').innerText = result.reviewsCount + " reviews";
    if(result.isSuperhost){
        document.querySelector('#isSupHost').innerText = "Super Host";
    }
    document.querySelector('#address').innerText = result.address;
}
handleHeader();

function handleImages() {
    let i;
    let char = 97;
    const imageCont = document.querySelector('.hero'); 
   for (i = 0;  i < 5; i++) {
       let img = document.createElement('img');
       img.className = String.fromCharCode(char);
       img.src = result.images[i];
       char++;
       imageCont.appendChild(img);
   }
}
handleImages();

function handlePrice() {
    document.querySelector('.price').innerText = `${result.price.rate} ₹ / night`
    document.querySelector('#rate').innerText = `${result.rating}`
    document.querySelector('#rev').innerText = `${result.reviewsCount} reviews`
    let price_cont = document.querySelector('.price-details');
    let total = 0;
    for (let i = 0; i < result.price.priceItems.length; i++) {
        const div = document.createElement('div');
        div.className = 'row2';
        div.innerHTML = `
                        <div class="weekly-discount">${result.price.priceItems[i].title}</div>
                        <div class="weekly-discount-price">₹${result.price.priceItems[i].amount}</div>`;
        total += result.price.priceItems[i].amount;
        price_cont.appendChild(div);
    }

    const div = document.createElement('div');
    div.className = 'row2';
    div.innerHTML = `<div class="total">Total</div>
    <div id="tot">₹${total}</div>`
    price_cont.appendChild(div);
    
}
handlePrice();


function addColor(event) {
    if(event.target.style.color === 'red'){
        event.target.style.color = 'black';
    }else{
        event.target.style.color = 'red';
    }
}

async function getRoomDetails() {
    const url = `https://airbnb19.p.rapidapi.com/api/v1/getPropertyDetails?propertyId=${roomData.id}&currency=INR`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f883b90791msha59eee7d63130abp1b6ef4jsn68f1a6a10240',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    
}
// getRoomDetails();


// Creating a map object
 var map = L.map('map').setView([result.lat, result.lng], 13);
mapLink =
  '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
  }).addTo(map);

 
 // Creating a Layer object
 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 map.addLayer(layer);         // Adding layer to the map
 var marker = L.marker([result.lat, result.lng]);    // Creating a Marker
 
 // Adding popup to the marker
 marker.bindPopup('You will be exactly here').openPopup().addTo(map);
 marker.addTo(map); // Adding marker to the map

  

function showBookingCostBreakdown(listing) {
    // Calculate additional fees and total cost
    const additionalFees = listing.price * 0.10; // Assuming additional fees are 10% of base price
    const totalCost = listing.price + additionalFees;

    // Create a modal dialog box
    const modal = document.createElement("div");
    modal.style.display = "block";
    modal.style.width = "300px";
    modal.style.height = "200px";
    modal.style.backgroundColor = "#fff";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

    // Add booking cost breakdown to the modal
    modal.innerHTML = `
        <h2>Booking Cost Breakdown</h2>
        <p>Base Rate: $${listing.price.toFixed(2)}</p>
        <p>Additional Fees: $${additionalFees.toFixed(2)}</p>
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
    `;

    // Add a close button to the modal
    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.addEventListener("click", () => modal.style.display = "none");
    modal.appendChild(closeButton);

    // Add the modal to the body
    document.body.appendChild(modal);
}


let obj = {
    "status": true,
    "message": "Success",
    "timestamp": 1693907325149,
    "data": {
      "title": "Rental unit in Paris · ★4.72 · 1 bedroom · 2 beds · 1 shared bath",
      "propertyType": "Private room in rental unit",
      "location": "Paris",
      "personCapacity": 4,
      "imageUrl": "https://a0.muscache.com/pictures/miso/Hosting-674435638582589710/original/29365047-bd64-4f3d-b195-90cf670c86fc.jpeg",
      "descriptionLanguage": "fr",
      "listingLat": 48.84266,
      "listingLng": 2.39273,
      "homeTier": 1,
      "roomType": "Private room",
      "visibleReviewCount": "18",
      "valueRating": 4.56,
      "locationRating": 4.78,
      "pictureCount": 5,
      "communicationRating": 4.72,
      "checkinRating": 4.89,
      "accuracyRating": 4.67,
      "cleanlinessRating": 4.5,
      "guestSatisfactionOverall": 4.72,
      "allowsChildren": true,
      "allowsInfants": true,
      "allowsPets": false,
      "hostId": "307001449",
      "hostName": "Charlotte",
      "hostProfilePhotoUrl": "https://a0.muscache.com/im/pictures/user/79cccbaa-3258-4379-b98d-a642587d63e7.jpg?aki_policy=profile_x_medium",
      "isHotelRatePlanEnabled": false,
      "isSuperhost": true,
      "maxNights": 365,
      "minNights": 3,
      "reviewsCount": "18",
      "reviewsRating": "4.72",
      "roomAndPropertyType": "Private room in rental unit",
      "barPrice": null,
      "canInstantBook": false,
      "price": {
        "barPrice": {},
        "price": {},
        "structuredDisplayPrice": {
          "accessibilityLabel": "$52 per night",
          "price": "$52",
          "qualifier": "night"
        }
      },
      "cancellationPolicies": [
        {
          "__typename": "LegacyPdpCancellationSection",
          "cancellationPolicyId": 4,
          "linkText": "Learn more",
          "milestones": [],
          "cancellationOverrideRules": null,
          "subtitle": "Add your trip dates to get the cancellation details for this stay.",
          "subtitles": [
            "For a full refund, the guest must cancel at least 5 full days before the listing’s local check-in time (shown in the confirmation email).",
            "If the guest cancels less than 5 days before check-in, the first night plus 50% of all nights after that, and the Airbnb service fee, are non-refundable.",
            "If the guest arrives and decides to leave early, 50% of the nightly rate for the nights not spent 24 hours after the cancellation occurs are refunded.",
            "Cleaning fees are always refunded if the reservation is canceled before check-in.",
            "The Airbnb service fee is refundable up to 3 times per year if the guest cancels at least 5 days before check-in. It isn't refundable if the guest cancels a reservation that overlaps with any part of an existing reservation.",
            "Accommodation fees (the total nightly rate you’re charged) are refundable in certain circumstances as outlined below.",
            "If there is a complaint from either party, notice must be given to Airbnb within 24 hours of check-in.",
            "Airbnb will mediate when necessary, and has the final say in all disputes.",
            "A reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page, which they can find in Dashboard > Your Trips > Change or Cancel.",
            "Cancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations by Airbnb for any other reason permitted under the Terms of Service. Please review these exceptions."
          ],
          "title": "Add your trip dates to get the cancellation details for this stay.",
          "localizedCancellationPolicyName": "Moderate",
          "cancellationPolicyPriceType": null,
          "cancellationPolicyPriceFactor": 0,
          "highlightedCancellationTip": null
        }
      ],
      "defaultDescription": {},
      "overview": [
        "4 guests",
        "1 bedroom",
        "2 beds",
        "1 shared bath"
      ],
      "images": [
        "https://a0.muscache.com/pictures/miso/Hosting-674435638582589710/original/29365047-bd64-4f3d-b195-90cf670c86fc.jpeg",
        "https://a0.muscache.com/pictures/miso/Hosting-674435638582589710/original/a88fbf84-9873-446f-bbc4-a8043b9c97c2.jpeg",
        "https://a0.muscache.com/pictures/miso/Hosting-674435638582589710/original/14a08868-dd45-4c9d-afb1-32b716598ea7.jpeg",
        "https://a0.muscache.com/pictures/miso/Hosting-674435638582589710/original/a89f1c7a-a1e9-4396-8539-4e4ad9ecec1e.jpeg"
      ],
      "details": [
        {
          "title": "What this place offers",
          "amenities": [
            {
              "title": "Bathroom",
              "amenities": [
                {
                  "title": "Cleaning products",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Timotei shampoo",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Hot water",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Shower gel",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Bedroom and laundry",
              "amenities": [
                {
                  "title": "Washer",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Essentials",
                  "subtitle": "Towels, bed sheets, soap, and toilet paper",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Bed linens",
                  "subtitle": "Cotton linens",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Drying rack for clothing",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Clothing storage: closet",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Entertainment",
              "amenities": [
                {
                  "title": "Books and reading material",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Family",
              "amenities": [
                {
                  "title": "Board games",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Heating and cooling",
              "amenities": [
                {
                  "title": "Central heating",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Home safety",
              "amenities": [
                {
                  "title": "Smoke alarm",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Carbon monoxide alarm",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Internet and office",
              "amenities": [
                {
                  "title": "Wifi",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Dedicated workspace",
                  "subtitle": "In a common space",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Kitchen and dining",
              "amenities": [
                {
                  "title": "Kitchen",
                  "subtitle": "Space where guests can cook their own meals",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Refrigerator",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Microwave",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Cooking basics",
                  "subtitle": "Pots and pans, oil, salt and pepper",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Dishes and silverware",
                  "subtitle": "Bowls, chopsticks, plates, cups, etc.",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Mini fridge",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Oven",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Hot water kettle",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Wine glasses",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Baking sheet",
                  "subtitle": "",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Outdoor",
              "amenities": [
                {
                  "title": "Shared backyard – Not fully fenced",
                  "subtitle": "An open space on the property usually covered in grass",
                  "available": true,
                  "image": null,
                  "images": []
                }
              ]
            },
            {
              "title": "Not included",
              "amenities": [
                {
                  "title": "Security cameras on property",
                  "subtitle": null,
                  "available": false,
                  "image": null,
                  "images": []
                },
                {
                  "title": "TV",
                  "subtitle": "",
                  "available": false,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Air conditioning",
                  "subtitle": "",
                  "available": false,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Hair dryer",
                  "subtitle": "",
                  "available": false,
                  "image": null,
                  "images": []
                },
                {
                  "title": "Private entrance",
                  "subtitle": "",
                  "available": false,
                  "image": null,
                  "images": []
                }
              ]
            }
          ]
        },
        {
          "title": "Where you’ll be",
          "subtitle": null,
          "lat": 48.84266,
          "lng": 2.39273,
          "locationDisclaimer": "Exact location provided after booking.",
          "locationDetails": [
            {
              "__typename": "LocationDetail",
              "id": "TG9jYXRpb25EZXRhaWw6bmVpZ2hib3Job29kLXNlZUFsbF82NzQ0MzU2Mzg1ODI1ODk3MTA=",
              "displayType": "TEXT",
              "title": "Paris, Île-de-France, France",
              "content": {
                "__typename": "ReadMoreHtml",
                "htmlText": "Quiet, residential, green neighborhood. <br /><br />The building is located near the middle of the Coulée Verte (a long planted walk in the heart of Paris): <br />- Which leads on one side to the great Bois de Vincennes, with a lake and other entertainment<br />- And on the other hand, towards the Bastille district, the most lively in the evening",
                "readMoreButton": {
                  "__typename": "BasicListItem",
                  "action": null,
                  "anchor": null,
                  "accessibilityLabel": null,
                  "icon": null,
                  "loggingEventData": {
                    "__typename": "LoggingEventData",
                    "loggingId": "pdp.location.neighborhoodReadMore",
                    "component": "neighborhoodReadMore",
                    "section": "location",
                    "eventData": null,
                    "eventDataSchemaName": null
                  },
                  "title": "Read more",
                  "screenNavigation": null,
                  "subtitle": null,
                  "button": null
                },
                "recommendedNumberOfLines": 3
              },
              "items": null
            },
            {
              "__typename": "LocationDetail",
              "id": "TG9jYXRpb25EZXRhaWw6Z2V0dGluZythcm91bmRfNjc0NDM1NjM4NTgyNTg5NzEw",
              "displayType": "TEXT",
              "title": "Getting around",
              "content": {
                "__typename": "ReadMoreHtml",
                "htmlText": "The Daumesnil metro station is a 3 min walk away (line 6). Reuilly Diderot station (line 1) 6 min away. <br />10 min away: Nation, with several lines (metro 2, RER A...) <br /><br />On the street there is also a Bus (46) and a station to rent Vélib'bikes.",
                "readMoreButton": {
                  "__typename": "BasicListItem",
                  "action": null,
                  "anchor": null,
                  "accessibilityLabel": null,
                  "icon": null,
                  "loggingEventData": {
                    "__typename": "LoggingEventData",
                    "loggingId": "pdp.location.transitReadMore",
                    "component": "transitReadMore",
                    "section": "location",
                    "eventData": null,
                    "eventDataSchemaName": null
                  },
                  "title": "Read more",
                  "screenNavigation": null,
                  "subtitle": null,
                  "button": null
                },
                "recommendedNumberOfLines": 3
              },
              "items": null
            }
          ]
        },
        {
          "additionalHosts": null,
          "additionalHostsTitle": null,
          "disclaimerItems": null,
          "hostAvatar": {
            "__typename": "Avatar",
            "avatarImage": {
              "__typename": "Image",
              "accessibilityLabel": "Charlotte is a superhost. Learn more about Charlotte.",
              "baseUrl": "https://a0.muscache.com/im/pictures/user/79cccbaa-3258-4379-b98d-a642587d63e7.jpg",
              "id": "79cccbaa-3258-4379-b98d-a642587d63e7",
              "onPressAction": null
            },
            "badge": "SUPER_HOST",
            "userId": "307001449",
            "loggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.hostProfile.profilePhoto",
              "component": "profilePhoto",
              "section": "hostProfile",
              "eventData": null,
              "eventDataSchemaName": null
            }
          },
          "hostBasicInfos": [
            {
              "__typename": "BasicListItem",
              "action": null,
              "anchor": null,
              "accessibilityLabel": null,
              "icon": null,
              "loggingEventData": null,
              "title": "Joined in November 2019",
              "screenNavigation": null,
              "subtitle": null,
              "button": null
            }
          ],
          "hostFeatures": [
            {
              "__typename": "BasicListItem",
              "action": null,
              "anchor": null,
              "accessibilityLabel": null,
              "icon": null,
              "loggingEventData": null,
              "title": "Languages",
              "screenNavigation": null,
              "subtitle": "English, Español, Français",
              "button": null
            },
            {
              "__typename": "BasicListItem",
              "action": null,
              "anchor": null,
              "accessibilityLabel": null,
              "icon": null,
              "loggingEventData": null,
              "title": "Response rate",
              "screenNavigation": null,
              "subtitle": "100%",
              "button": null
            },
            {
              "__typename": "BasicListItem",
              "action": null,
              "anchor": null,
              "accessibilityLabel": null,
              "icon": null,
              "loggingEventData": null,
              "title": "Response time",
              "screenNavigation": null,
              "subtitle": "within an hour",
              "button": null
            }
          ],
          "hostImage": null,
          "hostInfos": [
            {
              "__typename": "HtmlListItem",
              "title": "During your stay",
              "html": {
                "__typename": "ReadMoreHtml",
                "htmlText": "Sleeping in the apartment, we will surely meet. <br />Otherwise, I am always available by message to answer questions, or give advice about Paris.",
                "readMoreButton": {
                  "__typename": "BasicListItem",
                  "action": null,
                  "anchor": null,
                  "accessibilityLabel": null,
                  "icon": null,
                  "loggingEventData": {
                    "__typename": "LoggingEventData",
                    "loggingId": "pdp.hostProfile.interactionReadMore",
                    "component": "interactionReadMore",
                    "section": "hostProfile",
                    "eventData": null,
                    "eventDataSchemaName": null
                  },
                  "title": "Read more",
                  "screenNavigation": null,
                  "subtitle": null,
                  "button": null
                },
                "recommendedNumberOfLines": 3
              }
            },
            {
              "__typename": "HtmlListItem",
              "title": "Charlotte is a Superhost",
              "html": {
                "__typename": "ReadMoreHtml",
                "htmlText": "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
                "readMoreButton": null,
                "recommendedNumberOfLines": null
              }
            }
          ],
          "hostProfileDescription": null,
          "hostTags": [
            {
              "__typename": "BasicListItem",
              "title": "18 Reviews",
              "icon": "COMPACT_STAR"
            },
            {
              "__typename": "BasicListItem",
              "title": "Identity verified",
              "icon": "COMPACT_VERIFIED"
            },
            {
              "__typename": "BasicListItem",
              "title": "Superhost",
              "icon": "COMPACT_SUPERHOST"
            }
          ],
          "subtitle": "Joined in November 2019",
          "title": "Hosted by Charlotte",
          "hostFirstName": null,
          "experienceId": ""
        },
        {
          "title": "Availability",
          "subtitle": "Add your travel dates for exact pricing",
          "priceDisclaimer": "Prices on calendar do not include taxes and fees",
          "reviewRating": "4.72",
          "reviewCount": "18",
          "reviewAccessibilityLabel": "Rated 4.72 out of 5 from 18 reviews.",
          "drawerCalendarLoggingEventData": {
            "__typename": "CalendarLoggingEventData",
            "clearDatesButton": {
              "__typename": "BasicListItem",
              "action": null,
              "anchor": null,
              "accessibilityLabel": null,
              "icon": null,
              "loggingEventData": {
                "__typename": "LoggingEventData",
                "loggingId": "pdp.drawer.clearDates",
                "component": "clearDates",
                "section": "drawer",
                "eventData": null,
                "eventDataSchemaName": null
              },
              "title": "Clear dates",
              "screenNavigation": null,
              "subtitle": null,
              "button": null
            },
            "selectCheckOutOnlyDateLoggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.drawer.selectCheckOutOnlyDate",
              "component": "selectCheckOutOnlyDate",
              "section": "drawer",
              "eventData": null,
              "eventDataSchemaName": null
            },
            "selectMinNightsViolationDateLoggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.drawer.selectMinNightsViolationDate",
              "component": "selectMinNightsViolationDate",
              "section": "drawer",
              "eventData": null,
              "eventDataSchemaName": null
            },
            "selectMaxNightsViolationDateLoggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.drawer.selectMaxNightsViolationDate",
              "component": "selectMaxNightsViolationDate",
              "section": "drawer",
              "eventData": null,
              "eventDataSchemaName": null
            },
            "selectUnavailableForCheckInDateLoggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.drawer.selectUnavailableForCheckInDate",
              "component": "selectUnavailableForCheckInDate",
              "section": "drawer",
              "eventData": null,
              "eventDataSchemaName": null
            },
            "selectUnavailableForCheckoutDateLoggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.drawer.selectUnavailableForCheckoutDate",
              "component": "selectUnavailableForCheckoutDate",
              "section": "drawer",
              "eventData": null,
              "eventDataSchemaName": null
            },
            "selectDateLoggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.drawer.selectDate",
              "component": "selectDate",
              "section": "drawer",
              "eventData": null,
              "eventDataSchemaName": null
            }
          },
          "descriptionItems": [
            {
              "__typename": "BasicListItem",
              "title": "Private room in rental unit"
            },
            {
              "__typename": "BasicListItem",
              "title": "2 beds"
            },
            {
              "__typename": "BasicListItem",
              "title": "1 shared bath"
            }
          ]
        },
        {
          "additionalHouseRules": "- No eating in the bedroom (all the living room and dining room are at your disposal)\n- Ask me for permission before inviting someone who is not on the reservation \n- Dispose / recycle your waste",
          "additionalHouseRulesTitle": "Additional rules",
          "cancellationPolicyForDisplay": null,
          "cancellationPolicies": [
            {
              "__typename": "PdpCancellationPolicy",
              "id": 4,
              "milestones": [],
              "cancellationMilestoneModal": {
                "__typename": "CancellationMilestoneModal",
                "title": null,
                "subtitles": null,
                "header": null,
                "entries": null,
                "actionLinkText": null,
                "actionLinkUrl": null
              },
              "seeDetailsLink": {
                "__typename": "BasicListItem",
                "action": null,
                "anchor": "/help/article/2637",
                "accessibilityLabel": null,
                "icon": null,
                "loggingEventData": {
                  "__typename": "LoggingEventData",
                  "loggingId": "pdp.policies.fullCancellations",
                  "component": "fullCancellations",
                  "section": "policies",
                  "eventData": null,
                  "eventDataSchemaName": null
                },
                "title": "Learn more",
                "screenNavigation": null,
                "subtitle": null,
                "button": null
              },
              "subtitle": "Add your trip dates to get the cancellation details for this stay.",
              "subtitles": [
                "For a full refund, the guest must cancel at least 5 full days before the listing’s local check-in time (shown in the confirmation email).",
                "If the guest cancels less than 5 days before check-in, the first night plus 50% of all nights after that, and the Airbnb service fee, are non-refundable.",
                "If the guest arrives and decides to leave early, 50% of the nightly rate for the nights not spent 24 hours after the cancellation occurs are refunded.",
                "Cleaning fees are always refunded if the reservation is canceled before check-in.",
                "The Airbnb service fee is refundable up to 3 times per year if the guest cancels at least 5 days before check-in. It isn't refundable if the guest cancels a reservation that overlaps with any part of an existing reservation.",
                "Accommodation fees (the total nightly rate you’re charged) are refundable in certain circumstances as outlined below.",
                "If there is a complaint from either party, notice must be given to Airbnb within 24 hours of check-in.",
                "Airbnb will mediate when necessary, and has the final say in all disputes.",
                "A reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page, which they can find in Dashboard > Your Trips > Change or Cancel.",
                "Cancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations by Airbnb for any other reason permitted under the Terms of Service. Please review these exceptions."
              ],
              "title": "Add your trip dates to get the cancellation details for this stay.",
              "localizedCancellationPolicyName": "Moderate",
              "cancellationPolicyPriceType": null,
              "cancellationPolicyPriceFactor": 0
            }
          ],
          "cancellationPolicyTitle": "Cancellation policy",
          "discountData": null,
          "houseRules": [
            {
              "__typename": "BasicListItem",
              "action": null,
              "anchor": null,
              "accessibilityLabel": null,
              "icon": null,
              "loggingEventData": null,
              "title": "Check-in after 4:00 PM",
              "screenNavigation": null,
              "subtitle": null,
              "button": null
            },
            {
              "__typename": "BasicListItem",
              "action": null,
              "anchor": null,
              "accessibilityLabel": null,
              "icon": null,
              "loggingEventData": null,
              "title": "Checkout before 12:00 PM",
              "screenNavigation": null,
              "subtitle": null,
              "button": null
            },
            {
              "__typename": "BasicListItem",
              "action": null,
              "anchor": null,
              "accessibilityLabel": null,
              "icon": null,
              "loggingEventData": null,
              "title": "4 guests maximum",
              "screenNavigation": null,
              "subtitle": null,
              "button": null
            }
          ],
          "houseRulesTitle": "House rules",
          "listingExpectations": null,
          "listingExpectationsTitle": null,
          "reportButton": null,
          "seeAllHouseRulesButton": {
            "__typename": "BasicListItem",
            "action": null,
            "anchor": null,
            "accessibilityLabel": null,
            "icon": null,
            "loggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.policies.showAllRules",
              "component": null,
              "section": null,
              "eventData": null,
              "eventDataSchemaName": null
            },
            "title": "Show more",
            "screenNavigation": null,
            "subtitle": null,
            "button": null
          },
          "seeCancellationPolicyButton": {
            "__typename": "BasicListItem",
            "action": null,
            "anchor": null,
            "accessibilityLabel": null,
            "icon": null,
            "loggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.policies.showAllCancellations",
              "component": null,
              "section": null,
              "eventData": null,
              "eventDataSchemaName": null
            },
            "title": "Show more",
            "screenNavigation": null,
            "subtitle": null,
            "button": null
          },
          "title": "Things to know",
          "safetyAndPropertyTitle": "Safety & property",
          "previewSafetyAndProperties": [
            {
              "__typename": "SafetyAndPropertyInfo",
              "title": "Carbon monoxide alarm",
              "subtitle": null,
              "icon": null,
              "learnMoreButton": null
            },
            {
              "__typename": "SafetyAndPropertyInfo",
              "title": "Smoke alarm",
              "subtitle": null,
              "icon": null,
              "learnMoreButton": null
            }
          ],
          "seeAllSafetyAndPropertyButton": {
            "__typename": "BasicListItem",
            "action": null,
            "anchor": null,
            "accessibilityLabel": null,
            "icon": null,
            "loggingEventData": {
              "__typename": "LoggingEventData",
              "loggingId": "pdp.policies.showAllSafetyAndProperty",
              "component": null,
              "section": null,
              "eventData": null,
              "eventDataSchemaName": null
            },
            "title": "Show more",
            "screenNavigation": null,
            "subtitle": null,
            "button": null
          },
          "safetyExpectationsAndAmenities": null
        }
      ]
    }
  };
  console.log(obj);