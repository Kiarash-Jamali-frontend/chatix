export default function getGroupMemberId({
    groupId,
    email
}: {
    groupId: string,
    email: string
}) {
    return `${groupId}_${email}`;
}