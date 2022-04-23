import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#178ADC" }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalTextItem}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalTextItem: {
        color: '#094ACD',
        padding: 12,
    }
});