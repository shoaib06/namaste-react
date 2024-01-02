#Namaste React


#Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algoritms - Written in C++
- Caching - Building Cache For Faster Build
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - to remove unused code
- Different dev and production bundles

#App Layout

-Header
    -Logo
    - Nav Items
        - Home
        - About Us
        - Cart
-Body
    - Search
    - Restuarant Container
        -Restaurant Cards
            - Img
            - Name, Star Rating, cuisine, delivery time
            
-Footer
    -Copyright
    -Links
    -Address
    - Contact


There are two types of Export/Import

-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

#React Hooks
(Normal JS utility Funtions)
-useState
-useEffect