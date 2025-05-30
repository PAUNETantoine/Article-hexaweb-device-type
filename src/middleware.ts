import {NextRequest, NextResponse, userAgent} from "next/server";
import {DeviceType} from "@/ui/utils/get-device-type";

export const middleware = (request: NextRequest)=> {
    const { device } = userAgent(request)
    const deviceType: DeviceType =
        device.type === "mobile" ? "mobile" : "desktop"

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-device-type", deviceType)

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
}