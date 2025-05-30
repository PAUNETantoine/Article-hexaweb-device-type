import { headers } from "next/headers"

export type DeviceType = "mobile" | "desktop"

export const getDeviceType = async () => {
    const headersList = await headers()
    const deviceType = headersList.get("x-device-type")

    return (deviceType || "desktop") as DeviceType
}
